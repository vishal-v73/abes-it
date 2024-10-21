const myPromise = new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
    if (success) {
        resolve("Data Sent Successfully");
    } else {
        reject("Data Not Found");
    }
},5000);
});

myPromise.then((message) => { console.log("data" + message); 
    })
    .catch((error) => {
        console.log(error);
    });
