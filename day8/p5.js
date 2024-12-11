async function orderFood(name,time){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve(name =name + " prepard");
        },time);
    });
}
async function resturnet(){
    console.log("order placed");
    const pizza= await orderFood("pizza",1000);
    console.log(pizza);
    const burger= await orderFood("pizza",2000);
    console.log(burger);
    const icecream= await orderFood("pizza",3000);
    console.log(icecream);
}

resturnet();