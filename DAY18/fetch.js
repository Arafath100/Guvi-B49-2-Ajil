const url = "https://restcountries.com/v3.1/all";

fetch(url).then((response)=> {
    if (response.status === 200) {
        return response.json();
    } else {
        console.log("Error");
    }
}).then((data)=> {
    console.log("DATA: ", data);
}).catch((error)=> {
    console.error("Error: ", error);
});