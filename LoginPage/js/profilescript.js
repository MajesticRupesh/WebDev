function myMove3() {
    document.getElementById('passContainer').style.display = "none";
    document.getElementById('profileContainer').style.display = "block";
    
    var str = "RUPESH PAL";
    var current = "";
    var count = 0;
    var i;

    for(i=0;i<10;i++)
        setTimeout(opacityControl, 1000+i*30,i/10,"proftext")

    // show RUPESH PAL
    for (i = 0; i <= 90; i++) {
        current = current + str.charAt(count++);
        setTimeout(display, i * 40+1500, current,"namePerson");
    }

    str="20";
    current="";
    count=0;
    // show 18
    for (i = 0; i <= 10; i++) {
        current = current + str.charAt(count++);
        setTimeout(display, i * 40+1500, current,"agePerson");
    }

    str="IT";
    current="";
    count=0;
    // show IT
    for (i = 0; i <= 10; i++) {
        current = current + str.charAt(count++);
        setTimeout(display, i * 40+1500, current,"deptPerson");
    }

    str="DEBUGGER";
    current="";
    count=0;
    // show DEBUGGER
    for (i = 0; i <= 70; i++) {
        current = current + str.charAt(count++);
        setTimeout(display, i * 40+1500, current,"rankPerson");
    }
}

function display(strings,person) {
    document.getElementById(person).innerHTML = strings;
}

function opacityControl(num,id) {
    document.getElementById(id).style.opacity=num;
}