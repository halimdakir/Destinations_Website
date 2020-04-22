function login() {
    document.getElementById("login_error").style.color = "red";
    document.getElementById("login_error").style.border = "2px solid red";
    document.getElementById("login_error").style.backgroundColor = "rgba(0,0,0, .5)";
    document.getElementById("login_error").innerHTML = " &nbsp;Email and / or Password incorrect!&nbsp; ";
    return false;
}