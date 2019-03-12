function submitIt(e){
    e.preventDefault();
    let val = document.getElementById("theInput");
    let obj = {};
    obj[val.id] = val.value;
    fetch('http://localhost:9001/', {
        headers:{
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(obj)
    }).then((res)=>{
        console.log(res)
        // return res.json();
    })
    // .then((myjson)=>{
    //     console.log(myjson)
    // })
}