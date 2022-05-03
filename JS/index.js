function myFunction1() {
    document.getElementById("myportfolio").style.background = "#111011";
}
function myFunction2() {
    document.getElementById("myportfolio").style.background = "#6e87e1";
} function myFunction3() {
    document.getElementById("myportfolio").style.background = "#5e5f7e";
} function myFunction4() {
    document.getElementById("myportfolio").style.background = "#9ecbaa";
} function myFunction5() {
    document.getElementById("myportfolio").style.background = "#d9897c";
}
function myFunction6() {
    document.getElementsByClassName("tabl").fontSize = "25px"
}
function myFunction7() {
    document.getElementById("tabl").style.backgroundColor ="white";
}
function myFunction8() {
    document.getElementById("tabl").style.fontSize = "140%";
}
function savedata() {
    var user = document.getElementById("name").value;
    var newnode = document.createElement("div");
    newnode.innerHTML=`<p>
    username: ${user}
    </p>`
    document.getElementById("result").append(newnode);
    localStorage.setItem("username", document.getElementById("result").innerHTML);
    var em = document.getElementById("email").value;
    var newnode = document.createElement("div");
    newnode.innerHTML=`<p>
    eamil: ${em}
    </p>`
    document.getElementById("result").append(newnode);
    localStorage.setItem("username", document.getElementById("result").innerHTML);
    var pwd = document.getElementById("password").value;
    var newnode = document.createElement("div");
    newnode.innerHTML=`<p>
    password: ${pwd} <br> ...........................
    </p>`
    document.getElementById("result").append(newnode);
    localStorage.setItem("username", document.getElementById("result").innerHTML);
    
  }
  
  function load_page(){
    document.getElementById("result").innerHTML=window.localStorage.getItem("username");
  }
  load_page();
      