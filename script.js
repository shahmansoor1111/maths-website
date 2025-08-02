const { use } = require("react");

function nums () {
    let user = document.getElementById("num").value
    let check = document.getElementById("result")
    if(!user ) {
        check.textContent = "Please enter one number ........."
        return;
    }
    if(user < 0) {
         check.textContent = "number must be in postive"
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
        check.textContent = "Please enter one number ........."
        return;
    }
    if(user < 0) {
         check.textContent = "number must be in postive"
         return;
    }
    let a = user * user * user
    check.textContent = a
    return;
}
function tables () {
     let user = document.getElementById("table").value
    let check = document.getElementById("conclusion")
    for(let i = 1; i < 10; i++) {
       let a = user + "x" + i + "=" + user * i;
       check.textContent = a;
       return;
    // console.log(`${user} x ${i} = ${user * i}`)

    }
}