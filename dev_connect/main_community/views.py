from django.shortcuts import render
from django.http import HttpResponse
from .forms import Login,Signup
from django.views import View
from pymongo import *
from .models import AddUser
from django.conf import settings

def home(request):
    return render(request,'colorlib-regform-7/login.html')

def login(request):
    form = Login()
    return render(request,'colorlib-regform-7/login.html',{'form':form})

def signup(request):
    form = Signup()
    return render(request,'colorlib-regform-7/sign up.html')#,{'form':form})


class Signnedup(View):
# Get data from forms
    def get(self,request):
            error = "Invalid method"
            # form = Signup()
            return HttpResponse('<h1>Success</h1>')#render(request,"app1/signup.html",{'form':form,'error':error})
    def post(self,request):
        # print('called POST function')
        form = Signup(request.POST,request.FILES)
        # print(form)
        if form.is_valid():
            # print('after calling')
            mail = form.cleaned_data['email']

            try:
                 # data=request.POST.get(mail='email')
                data=AddUser.objects.get(email=mail)
                 #print(data)

            except AddUser.DoesNotExist as e:
                print('in exist')
                p1 = form.cleaned_data['passwd']
                p2 = form.cleaned_data['re_pass']
                if p1 == p2:
                    dict = {
                    'username' : form.cleaned_data['name'],
                    'email' : form.cleaned_data['email'],
                    'password':form.cleaned_data['passwd'],
                    # 'pic' : form.cleaned_data['pic'],

                    }
                    new_obj = AddUser.objects.create(**dict)
                    new_obj.save()
                    return render(request,'colorlib-regform-7/login.html')

                    # return HttpResponse('<h1>Success</h1>')#render(request,"app1/data.html",{'dict':dict})
                else:
                    error = "Password does not match...Try again"
                    # form = Signup()
                    return render(request,'colorlib-regform-7/login.html')

                    #return HttpResponse('<h1>password not matched</h1>')# return render(request,"app1/signup.html",{'form':form,'error':error})
            else:
                error = "User already exist..."
                # form = Signup()
                return render(request,'colorlib-regform-7/login.html',{'error':error})

                # return HttpResponse('<h1>user already exist</h1>')# return render(request,"app1/signup.html",{'form':form,'error':error})

        else:
                error = "Invalid Form"
                # form = Signup()
                return render(request,'colorlib-regform-7/login.html',{'error':error})

                # return HttpResponse('<h1>Invalid form</h1>')# return render(request,"app1/signup.html",{'form':form,'error':error})

def login1(request):
    form = Login(request.POST)
    if request.method == "POST":
        if form.is_valid():
            email = form.cleaned_data['email']
            password = form.cleaned_data['passwd']
            user = AddUser.objects.get(email=email)
            if password == user.password:
                request.session['email'] = email
                response = HttpResponse("", status=302)
                # response['Location'] = "http://www.google.com"
                return render(request,'colorlib-regform-7/heremap.html')
            else:
                print("password not matched")
                error = "Password does not match.."
                # form = Login()
                return render(request,"colorlib-regform-7/login.html",{'error':error})

        else:
            print("Invalid form")
            error = "invalid form"
            # form = Login()
            return render(request,"colorlib-regform-7/login.html",{'error':error})
    else:
        print("invalid method")
        error = "invalid method"
        # form = Login()
        return render(request,"colorlib-regform-7/login.html",{'error':error})
