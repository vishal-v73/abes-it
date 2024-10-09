// var a=12;
// function display(){
//     console.log(a);
// }
// "use strict"
// let a =12;
// let b=22/7;
// let c="hello";
// let d=[1,2,3]
// let e={
//     name:"vishal",
//     id :12,
// }
// let f=true

// let str="true";
// let num= Boolean(0);
// console.log(num);

// conform
// function display(){
//     let x = confirm("are you sure");
//     alert("user selects");
// }

//prompt
// function display(){
//     let x = prompt("Enter your name,vishal");
//     alert(x);
// }

//===
// 
function validate(){
    let login = document.getElementById("login").value;
    let password=document.getElementById("pass").value;
    let p1=document.getElementById("result");
    if(login=="admin" && password=="admin"){
        p1.innerText="login success"
    }else p1.innerText="Login Failed";
    return false;
}