from api.models import User


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
