function validateForm() {
    const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    let firstName = document.forms["form"]["first"].value;
    let lastName = document.forms["form"]["last"].value;
    let phone = document.forms["form"]["phone"].value;
    let email = document.forms["form"]["email"].value;
    let destination = document.forms["form"]["destination"].value;

    if (firstName === ''){
        document.getElementById("first").style.border = "3px solid red";
            return false;
    }
    if (firstName !=='' || firstName.length>0) {
        document.getElementById("first").style.border = "3px solid #17FC08";
    }
    if (lastName === ''){
            document.getElementById("last").style.border = "3px solid red";
            return false;
    }if (lastName !=='' || lastName.length>0) {
        document.getElementById("last").style.border = "3px solid #17FC08";
    }
    if (phone === '' || !phoneRegex.test(phone)){
        document.getElementById("phone").style.border = "3px solid red";
        return false;
    }if (phone !=='' && phone.length>0) {
        document.getElementById("phone").style.border = "3px solid #17FC08";
    }
    if (email === '' || !emailRegex.test(email)){
        document.getElementById("email").style.border = "3px solid red";
        return false;
    }
    if (email !=='' && email.length>0 && emailRegex.test(email)) {
        document.getElementById("email").style.border = "3px solid #17FC08";
    }
    if (destination === "default"){
        document.getElementById("destination").style.border = "3px solid red";
        return false;
    }
    if (destination !=='default') {
        document.getElementById("destination").style.border = "3px solid #17FC08";
    }
    else {
            return true;
    }

}
