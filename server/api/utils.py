from api.models import User
import bcrypt

def hash_password(password):

    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), salt)
    return hashed_password.decode('utf-8')


def verify_password(hashed_password, password_to_check):

    return bcrypt.checkpw(password_to_check.encode('utf-8'), hashed_password.encode('utf-8'))


def update_user(username, data) :
    try :
        user = User.objects.get(username = username)

        user.health = data['health']
        user.food = data['food']
        user.training = data['training']
        user.program = str(data['program'])
        user.eat = str(data['eat'])
        user.avoid = str(data['avoid'])
        user.advice = str(data['advice'])
        user.calories = data['macros']['calories']
        user.protein = data['macros']['protein']
        user.fat = data['macros']['fat']
        user.carbs = data['macros']['carbs']
        user.fibers = data['macros']['fibers']

        user.has_data = True
        user.save()
    except Exception as e:
        print('User not updated')
        print(e)
