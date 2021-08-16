document.getElementById('login-submit').addEventListener('click',function(){
    const userMail = document.getElementById('user-email').value;
    const passWord = document.getElementById('user-password').value;
    if(userMail == "tanjilas@hotmail.com" && passWord == '123456'){
        window.location.href = "banking.html"
    }
    else{
        alert("Invalid user Email or password");
    }
});