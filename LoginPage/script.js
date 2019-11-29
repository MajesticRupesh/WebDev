function myMove() {
    var str = "USERNAME";
    var current = "";
    var count = 0;
    var i;

    document.getElementById('textbox').style.display = 'none';

    // show USERNAME
    for (i = 0; i <= 70; i++) {
        if (i * 10 % 100 == 0) {
            current = current + str.charAt(count++);
            setTimeout(displayText, i * 10, current);
        } else
            setTimeout(displayText, i * 10, current + String.fromCharCode(Math.floor(Math.random() * (90 - 65)) + 65));
    }

    // show gradient 1
    for (i = 0; i <= 100; i++)
        setTimeout(grad1, i * 5 + 500, i);

    // show gradient 2
    for (i = 0; i <= 100; i++)
        setTimeout(grad2, i * 5 + 1000, i);

    // show the textbox and make it active
    setTimeout(showtextbox, 1500);
}

function displayText(strings) {
    var elem = document.getElementById("spantext");
    elem.innerHTML = strings;
}

function grad1(percent) {
    var elem1 = document.getElementById("box1");
    var elem2 = document.getElementById("inputtext");
    elem1.style.border = "2px solid";
    elem2.style.border = "2px solid";
    elem1.style.borderImage = 'linear-gradient(to right,#009985 ' + percent + '%' + ',transparent 1%)';
    elem1.style.borderImageSlice = "1";
    elem2.style.borderImage = 'linear-gradient(to left,#008599 ' + percent + '%' + ',transparent 1%)';
    elem2.style.borderImageSlice = "1";
}

function grad2(percent) {
    var elem1 = document.getElementById("box1");
    var elem2 = document.getElementById("inputtext");
    elem1.style.border = "2px solid";
    elem2.style.border = "2px solid";
    elem1.style.borderImage = 'linear-gradient(to left,#0FD ' + percent + '%' + ',#009985 1%)';
    elem1.style.borderImageSlice = "1";
    elem2.style.borderImage = 'linear-gradient(to right,#0DF ' + percent + '%' + ',#008599 1%)';
    elem2.style.borderImageSlice = "1";
}

function showtextbox() {
    document.getElementById('textbox').style.display = 'block';
    document.getElementById('textbox').focus();
}

function playAudio1(event) {
    var key = event.keyCode + '';
    key = key.toUpperCase();

    if ((key >= 65 && key <= 90) || key == 32)
        document.getElementById('buttonAudio1').play();
    if (key == 13) {
        document.getElementById('buttonAudio2').play();
        myMove2();
    }
}

function playAudio2(event) {
    var key = event.keyCode + '';

    if ((key >= 65 && key <= 90) || (key >= 97 && key <= 122) || key == 32)
        document.getElementById('buttonAudio1').play();
    if (key == 13) {
        document.getElementById('buttonAudio2').play();
        myMove3();
    }
}

function myMove2() {
    document.getElementById('loginContainer').style.display = "none";
    document.getElementById('passContainer').style.display = "block";
    document.getElementById('passbox').style.display = 'none';

    var str = "PASSWORD";
    var current = "";
    var count = 0;
    var i;

    // show PASSWORD
    for (i = 0; i <= 35; i++) {
        if (i * 10 % 50 == 0) {
            current = current + str.charAt(count++);
            setTimeout(displayPass, i * 10, current);
        } else
            setTimeout(displayPass, i * 10, current + String.fromCharCode(Math.floor(Math.random() * (90 - 65)) + 65));
    }

    // show gradient 3
    for (i = 0; i <= 100; i++)
        setTimeout(grad3, i * 2 + 200, i);

    // show gradient 4
    for (i = 0; i <= 100; i++)
        setTimeout(grad4, i * 2 + 400, i);

    // show the textbox and make it active
    setTimeout(showpassbox, 600);
}

function displayPass(strings) {
    var elem = document.getElementById("spanpass");
    elem.innerHTML = strings;
}

function grad3(percent) {
    var elem1 = document.getElementById("box2");
    var elem2 = document.getElementById("inputpass");
    elem1.style.border = "2px solid";
    elem2.style.border = "2px solid";
    elem1.style.borderImage = 'linear-gradient(to right,#009985 ' + percent + '%' + ',transparent 1%)';
    elem1.style.borderImageSlice = "1";
    elem2.style.borderImage = 'linear-gradient(to left,#008599 ' + percent + '%' + ',transparent 1%)';
    elem2.style.borderImageSlice = "1";
}

function grad4(percent) {
    var elem1 = document.getElementById("box2");
    var elem2 = document.getElementById("inputpass");
    elem1.style.border = "2px solid";
    elem2.style.border = "2px solid";
    elem1.style.borderImage = 'linear-gradient(to left,#0fd ' + percent + '%' + ',#009985 1%)';
    elem1.style.borderImageSlice = "1";
    elem2.style.borderImage = 'linear-gradient(to right,#0df ' + percent + '%' + ',#008599 1%)';
    elem2.style.borderImageSlice = "1";
}

function showpassbox() {
    document.getElementById('passbox').style.display = 'block';
    document.getElementById('passbox').focus();
}