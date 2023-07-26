function asyncChain1() {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve("Task 1 completed");
        }, 1000);
    });
}

function asyncChain2() {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve("Task 2 completed");
        }, 2000);
    });
}

function asyncChain3() {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve("Task 3 completed");
        }, 3000);
    });
}

asyncChain1().then((val)=> {
    console.log(val);
    return asyncChain2();
})
.then((val)=> {
    console.log(val);
    return asyncChain3();
})
.then((val)=> {
    console.log(val);
    console.log("Completed!!!");
})
.catch((err)=> {
    console.log("Error", err);
});


function asyncTask1(()=> {
    return new Promise((reject)=> {
        setTimeout(()=> {
            reject("Task 1 rejected!")
        },3000);
    })
})