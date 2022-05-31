var click = function () {

    var username = document.getElementById("number2").value;
    
    if(username === "1") {
    
        window.open("http://127.0.0.1:5500/center2.html");
    } else if (username === "2") {
    
        window.open("http://127.0.0.1:5500/center3.html");
    } else if (username === "3") {

        window.open("http://127.0.0.1:5500/center4.html");
    } else if (username === "4") {

        window.open("http://127.0.0.1:5500/center5.html");
    } else if (username === "6") {

        window.open("http://127.0.0.1:5500/center6.html");
    } else if (username === "7") {

        window.open("http://127.0.0.1:5500/center7.html");
    } else if (username === "8") {

        window.open("http://127.0.0.1:5500/center8.html");
    } else if (username === "9") {

        window.open("http://127.0.0.1:5500/teacher%20page%20registration.html");
    } else

    document.write("look to number");
    }
    
    document.getElementById("submit1").onclick = click;