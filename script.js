const { use } = require("react");

function nums () {
    let user = document.getElementById("num").value
    let check = document.getElementById("result")
    if(!user ) {
        check.textContent = "Please enter one number ........."
        return;
    }
    if(user < 0) {
         check.textContent = "Number must be in postive"
         return;
    }
    let a = user * user
    check.textContent = a
    return;
}
function numss () {
    let user = document.getElementById("nums").value
    let check = document.getElementById("output")
     if(!user) {
        check.textContent = "Please enter one number ...."
        return;
    }
    if(user < 0) {
         check.textContent = "Number must be in postive"
         return;
    }
    let a = user * user * user
    check.textContent = a
    return;
}
function tables () {
     let user = document.getElementById("table").value
    let check = document.getElementById("conclusion")
    check.textContent = "";
    if(isNaN(user) || user < 0 || user == "") {
        check.textContent = "Enter a valid numberrr"
        return;
    }
    for(let i = 1; i <= 10; i++) {
       let result = user + "x" + i + "=" + user * i;
       check.textContent += result + "\n";
      

    }
    
    
}
function formula () {
     let user = document.getElementById("formula").value
    let check = document.getElementById("nan")
    if(user == "") {
         check.textContent = "Write a formula"
         return
    }
   if (user == "(a + b)2") {
    check.textContent = "a² + 2ab + b²"
   
   }
   else if (user == "(a - b)2"){
     check.textContent = "a² - 2ab + b²"
   }
   else if (user == "a2 - b2"){
     check.textContent = "(a + b)(a - b)"
   }
   else if (user == "(a + b)3"){
     check.textContent = " a³ + 3a²b + 3ab² + b³"
   }
   else if (user == "(a - b)3"){
     check.textContent = "a³ - 3a²b + 3ab² - b³"
   }
   else{
      check.textContent = "Not found!"
   }
}


    
