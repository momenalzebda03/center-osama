var login = function () {
    
 var number = document.getElementById("number").value;
 var password = document.getElementById("password").value;

    if(number === "20210175" && password === "17435") {

      window.open("http://127.0.0.1:5500/center1.html");
    } else if(number === "20210171" && password === "17431") {

      window.open("http://127.0.0.1:5500/center2.html");
    } else if (number === "20210172" && password === "17432") {

      window.open("http://127.0.0.1:5500/center3.html");
    } else if (number === "20210173" && password === "17433") {

      window.open("http://127.0.0.1:5500/center4.html");
    } else if (number === "20210174" && password === "17434") {

      window.open("http://127.0.0.1:5500/center5.html");
    } else if (number === "20210176" && password === "17436") {

      window.open("http://127.0.0.1:5500/center6.html");
    } else if (number === "20210177" && password === "17437") {

      window.open("http://127.0.0.1:5500/center7.html");
    } else if (number === "20210178" && password === "17438") {

      window.open("http://127.0.0.1:5500/center8.html");
    } else if (number === "20210179" && password === "17439") {

      window.open("http://127.0.0.1:5500/teacher%20page%20registration.html");
    } else
        document.write("look to number and password");
}

document.getElementById("submit").onclick = login;