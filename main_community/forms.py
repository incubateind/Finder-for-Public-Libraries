from django import forms

class Login(forms.Form):
    email = forms.EmailField()
    passwd = forms.CharField(widget=forms.PasswordInput)


class Signup(forms.Form):
    name = forms.CharField(max_length=40)
    email = forms.EmailField()
    # phnno = forms.IntegerField(min_value=0,max_value=10,widget=forms.NumberInput)
    passwd = forms.CharField(widget=forms.PasswordInput)
    re_pass= forms.CharField(widget=forms.PasswordInput)
    # subButton = forms.s
    # pic = forms.ImageField()
