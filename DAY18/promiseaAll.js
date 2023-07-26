function asyncChain1() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            resolve("Task 1 completed!");
            reject("Task 1 rejected!");
        }, 1000);
    });
}

function asyncChain2() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            resolve("Task 2 completed!");
            reject("Task 2 rejected!");
        }, 2000);
    });
}

function asyncChain3() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            resolve("Task 3 completed!");
            reject("Task 3 rejected!");
        }, 3000);
    });
}

function asyncChain4() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            let a = 10;
            let b = 10;
            if (a < b){
                resolve("Task 4 completed!");
            } else {
                reject("Task 4 rejected!");
            }
        }, 4000);
    });
}

Promise.all([asyncChain1(), asyncChain2(), asyncChain3(), asyncChain4()]).then((result)=> {
    console.log(result);
    console.log("All task completed!!!");
}).catch((error)=> {
    console.error("Error: ",error);
});