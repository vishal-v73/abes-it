let num = [1,2,3,42,54];
// let newnum = num.map(x=>x*2);
// console.log(newnum);


//even number FILTER use
// let evennum = num.filter(x=>x%2==0);
// console.log(evennum);


//USE OF REDUCE 
// let sum = num.reduce((x,y) =>x+y,0);
// console.log(sum);
//------------------------------------------------------------------------------------------------------------
// let product = num.reduce((x,y) =>x*y,1);
// console.log(product);
//-------------------------------------------------------------------------------------------------------------
// const student =[
//     {name:'Rahul', score:50},
//     {name:'vivek', score:30},
//     {name:'rakshit', score:100},
//     {name:'anup', score:20},
// ];
// console.log(student.map(x=>x.score).filter(x=>x>50).reduce((x,y)=>(x+y),0));

// console.log(student.filter(x=>x.score>50).map((x)=>x.score+10).reduce((x,y) => x+y,0));
//---------------------------------------------------------------------------------------------------
// num.forEach(x=> console.log(x * 5));
    

// sayhello=()=>{
// console.log("I am hello function")
// };
// console.log("start")
// setTimeout(sayhello,3000);
// console.log("end");
// setTimeout(sayhello,6000);

//------------------------------------------------------------------------------------------------
// making the function asyncronous
console.log("start")
setTimeout(()=>{
    console.log("first task completed");
    setTimeout(()=>{
        console.log("second task complleted");
        setTimeout(()=>{
            console.log("third task completed");
        },3000);
    },2000);
},1000);
console.log("end");