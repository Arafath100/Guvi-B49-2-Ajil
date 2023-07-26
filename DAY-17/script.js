//let promiseObj = new Promise(function (resolve, reject) {
//    console.log("Getting Result!");
//});

//let promiseObj = new Promise((resolve, reject)=> {
//    console.log("Getting the result!!!");
//    setTimeout(()=> {
//        resolve("Succes");    //=> fulfilled, Success
//        reject("Failed");    // => rejected, Failed
//    }, 3000);
//});

//console.log(promiseObj);

let promiseObj = new Promise((resolve, reject)=> {
    console.log("Getting the result!!!");
    setTimeout(()=> {
        resolve("Succes!!");    //=> fulfilled, Success
        reject("Failed!!");    // => rejected, Failed
    }, 3000);
});

promiseObj.then(
    (val)=> {
        console.log("Sucsess!!", val);
},
    (error) => {
        console.log("Failed!!");
    }
);