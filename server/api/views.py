from api.models import User
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from api.serializers import UserSerializer

from api.ai.ai_controller import generate_ai_data
from api.utils import update_user

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
                    'program': data['program'],
                    'eat': data['eat'],
                    'avoid': data['avoid'],
                    'advice': data['advice'],
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
        data  = request.data
        if User.objects.filter(username = data['username']).exists() :
            if not User.objects.filter(username= data['username'], password=data['password']).exists() :
                return Response({'status' : 'fail','message' : 'change username or password'},status=status.HTTP_400_BAD_REQUEST)
            user = User.objects.get(username=data['username'])
            return Response({'status' : 'success', 'username':data['username'], 'hasData': user.has_data})
        else :
            User.objects.create(username=data['username'], password=data['password'])
            return Response({'status' : 'success','hasData' : False, 'username':data['username']})

    except Exception as e:
        print(e)
        return Response({'status' : 'fail','message' : 'user not logged in'},status=status.HTTP_400_BAD_REQUEST)
    