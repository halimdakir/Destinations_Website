var nameRate = document.getElementById('fullName');
var textRate = document.getElementById('rate_text');
var eventListenerMsg = document.getElementById('errorMessage');
var nameIsTrue;
var textIsTrue;

//Full name in rate from
function checkFullName(minLength) {
    if (nameRate.value.length < minLength) {
        eventListenerMsg.innerHTML = 'Full name should be equal more than ' + minLength + ' characters.';
        nameIsTrue = false;
    }else {
        eventListenerMsg.innerHTML = '';
        nameIsTrue = true;
    }
}
    nameRate.addEventListener('blur', function () {
        checkFullName(6);
    }, false);

//Text in rate from
function checkText(minLength) {
    if (textRate.value.length < minLength) {
        eventListenerMsg.innerHTML = 'Text should be equal more than ' + minLength + ' characters.';
        textIsTrue = false;
    }else {
        eventListenerMsg.innerHTML = '';
        textIsTrue = true;
    }

}
    textRate.addEventListener('blur', function () {
        checkText(20);
    }, false);

