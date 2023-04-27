const cour = document.querySelector("#course");
const searC = document.querySelector("#searCode");
const searN = document.querySelector("#searName");
const searA = document.querySelector("#searAll");
const searR = document.querySelector("#searResp");

searC.addEventListener("click" , function() {
    let body = {
        "course_code" : cour.value
    };

    fetch("http://localhost:8080/get_course" , {
        method: "Post",
        headers: {
            "Content-type": "application/json",
        },
        body:JSON.stringify(body)
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        searR.innerText = JSON.stringify(data , null , 2);
    })
    .catch(function(error) {
        console.log(error);
    })
});

searN.addEventListener("click" , function() {
    let body = {
        "course_name" : cour.value
    };

    fetch("http://localhost:8080/find_course_name" , {
        method: "Post",
        headers: {
            "Content-type": "application/json",
        },
        body:JSON.stringify(body)
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        searR.innerText = JSON.stringify(data , null , 2);
    })
    .catch(function(error) {
        console.log(error);
    })
});

searA.addEventListener("click" , function() {
    fetch("http://localhost:8080/get_all_course" , {
        method: "Post",
        headers: {
            "Content-type": "application/json",
        }
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        searR.innerText = JSON.stringify(data , null , 2);
    })
    .catch(function(error) {
        console.log(error);
    })
});