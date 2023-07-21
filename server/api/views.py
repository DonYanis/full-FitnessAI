from api.models import User
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from api.serializers import UserSerializer
import ast

from api.ai.ai_controller import generate_ai_data
from api.utils import update_user, hash_password, verify_password

@api_view(['POST'])
def home(request):
    try :
        data = request.data

        #get result
        result = generate_ai_data(data)

        #update result to user
        update_user(data['username'], result)

    except Exception as e:
        print(e)
        return Response({'status' : 'fail','message' : 'ERROR !'},status=status.HTTP_400_BAD_REQUEST)
    
    return Response({'status' : 'success','data' : result})

@api_view(['GET','POST'])
def usersController(request):

    if request.method == 'GET' : 
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

    elif request.method == 'POST' : 
        try :
            user = User.objects.get(username = request.data['username'])
            serializer = UserSerializer(user)
            data = serializer.data

            res = {
                'status' : 'success',
                'data' : {
                    'health': data['health'],
                    'food': data['food'],
                    'training': data['training'],
                    'program': ast.literal_eval(data['program']),
                    'eat': ast.literal_eval(data['eat']),
                    'avoid': ast.literal_eval(data['avoid']),
                    'advice': ast.literal_eval(data['advice']),
                    'macros': {
                        'calories': int(data['calories']),
                        'protein': int(data['protein']),
                        'fat': int(data['fat']),
                        'carbs': int(data['carbs']),
                        'fibers': int(data['fibers'])
                        }
                }
            }
            return Response(res)
            
        except Exception as e:
            return Response({'status' : 'fail','message' : 'ERROR !'},status=status.HTTP_400_BAD_REQUEST)
    


@api_view(['POST'])
def login(request):    
    try :
        data = request.data
        if User.objects.filter(username = data['username']).exists() :
            #verify the password : 
            user = User.objects.get(username=data['username'])
            is_password_correct = verify_password(user.password, data['password'])
            if is_password_correct :
                return Response({'status' : 'success', 'username':data['username'], 'hasData': user.has_data})
            return Response({'status' : 'fail','message' : 'change username or password'},status=status.HTTP_400_BAD_REQUEST)

        else :
            #hash the password : 
            hashed_password = hash_password(data['password'])
            User.objects.create(username=data['username'], password=hashed_password)
            return Response({'status' : 'success','hasData' : False, 'username':data['username']})

    except Exception as e:
        print(e)
        return Response({'status' : 'fail','message' : 'user not logged in'},status=status.HTTP_400_BAD_REQUEST)
    