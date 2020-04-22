function dynamic_row() {
    let formName = document.forms["rateForm"]["fullName"].value;
    let formText = document.forms["rateForm"]["rate_text"].value;
    if (textIsTrue === true && nameIsTrue === true && formName !== '' && formText !== '') {

        const amount = document.forms["rateForm"]["stars"].value;
        const star_off = '<img src=\"image/rate/off.png\">';
        const star_on = '<img src=\"image/rate/on.png\">';
        let amount_star_off = '';
        let amount_star_on = '';

        for (var i = 0; i < (5 - amount); i++) {
            amount_star_off += star_off;
        }
        for (var j = 0; j < amount; j++) {
            amount_star_on += star_on;
        }

        const rate_final = '<span>' + amount_star_on + amount_star_off + '</span>';
        const name = '<h5>' + document.forms["rateForm"]["fullName"].value + '</h5>';
        const text_rate = '<p>' + document.forms["rateForm"]["rate_text"].value + '</p>';

        var inRow = rate_final + name + text_rate;
        var table = document.getElementById("rate");
        var row = table.insertRow(0);
        var cell = row.insertCell(0);
        cell.innerHTML = inRow;

        //Empty inputs
        document.forms["rateForm"]["fullName"].value = '';
        document.forms["rateForm"]["rate_text"].value = '';
    }else if (formName === ''){
        document.getElementById("fullName").style.border = "2px solid red";
    } else if (formText === ''){
    document.getElementById("rate_text").style.border = "2px solid red";
    }
}
