const stIdC = document.querySelector("#studIdC");
const co = document.querySelector("#courseCode");
const addB = document.querySelector("#addBtn");
const wiB = document.querySelector("#wiBtn");
const coList = document.querySelector("#couList");

addB.addEventListener("click" , function() {
    let body = {
        "stud_id" : stIdC.value,
        "course_code_list" : [
            co.value
        ]
    };
    
    fetch("http://localhost:8080/choose_course" , {
        method: "Post" ,
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(body)
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        coList.innerText = JSON.stringify(data , null , 2);
    })
    .then(function(error) {
        console.log(error);
    })
})

wiB.addEventListener("click" , function() {
    let body = {
        "stud_id" : stIdC.value,
        "course_code_list" : [
            co.value 
        ]
    };
    
    fetch("http://localhost:8080/withdraw_course" , {
        method: "Post" ,
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(body)
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        coList.innerText = JSON.stringify(data , null , 2);
    })
    .then(function(error) {
        console.log(error);
    })
})