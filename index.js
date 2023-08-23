async function myFunction(){
    const response = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
    const data = await response.json();
    return data
}

const obj ={
    "something":"is json"
}

function createElement(dt){
    const ele = document.createElement("h1");
    ele.innerHTML=dt.Year;
    document.querySelector(".data").appendChild(ele);
}

// myFunction().then((rsp)=>{
//     console.log(rsp)
//     rsp.data.forEach(i=>createElement(i))
// })

axios.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population").then((response)=>{
    response.data.data.forEach(i=>createElement(i))
})