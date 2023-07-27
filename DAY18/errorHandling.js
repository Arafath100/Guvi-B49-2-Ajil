function sub(a, b) {
    if(b > a) {
        throw new Error("B is greater than A, please check the input!");
    }
    return a - b;
}

try {
    let result = sub(15, 16);
    console.log(result);
}
catch(error) {
    console.error("An error occured: ", error.message)
}


function div(a, b) {
    try{
        if(b > a) {
            throw new Error("B is greater than A, So please check the Input!");
        }
        const result1 = a / b;
        console.log(result1);
    }
    catch(err) {
        console.error("An error occured: ", err.message);
    }
}

div(12,3);


function getItem() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const Item = "AnyItem";
            resolve(Item);
        }, 3000);
    });
}

async function gettedItem() {
    try{
    const result2 = await Item1(Item);
    console.log("Success!!", result2);
    } catch(err) {
        console.log("Error!!!", err);
    }
}

getItem();