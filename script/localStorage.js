var userCounter = 1;
function local_storage() {
    const formKey = ["FirstName", "LastName", "Phone", "Email", "Destination", "Message"];
    const fromId = ["first", "last", "phone", "email", "destination", "message"];
    let jsonUser = '{';
    let count = 1;

    for (let i = 0; i < fromId.length; i++){
        if (count< 6 ){
            jsonUser += '\"'+formKey[i]+'\": \"'+document.forms["form"][fromId[i]].value+'\", ';
        }else {
            jsonUser += '\"'+formKey[i]+'\": \"'+document.forms["form"][fromId[i]].value+'\"';
        }
        count++;

    }
    jsonUser += '}';
    let obj = JSON.parse(jsonUser);
    let jsonUser_serialized = JSON.stringify(obj);
    localStorage.setItem("user"+userCounter, jsonUser_serialized);
 userCounter++;
}