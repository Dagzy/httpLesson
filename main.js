function submitIt(e){
    e.preventDefault();
    let obj = makeObjectFromHTML();
    fetch('http://localhost:9001/', {
        headers:{
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(obj)
    }).then((res)=>{
        console.log(res);
    });
};

function makeObjectFromHTML(){
    let val = document.getElementById("theInput");
    let obj = {};
    obj[val.id] = val.value;
    return obj
}