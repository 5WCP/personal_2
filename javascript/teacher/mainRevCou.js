const coCo = document.querySelector("#courseCode");
const coNa = document.querySelector("#courseName");
const cre = document.querySelector("#credits");
const TCD = document.querySelector("#takeClassDay");
const ST = document.querySelector("#startTime");
const ET = document.querySelector("#endTime");
const couA = document.querySelector("#couAdd");
const couR = document.querySelector("#couRev");
const couD = document.querySelector("#couDele");
const respRC = document.querySelector("#respRevCou");

couA.addEventListener("click" , function() {
    let body = {
        "course_sch":{
            "courseCode": coCo.value,
            "courseName": coNa.value,
            "credits": cre.value,
            "takeClassDay": TCD.value
        },
        "start_time": ST.value,
        "end_time": ET.value
    };

    fetch("http://localhost:8080/add_course" , {
        method: "Post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        respRC.innerText = JSON.stringify(data , null , 2)
    })
    .catch(function() {
        console.log(error)
    })
});

// couR.addEventListener("click" , function() {
//     let body = {
//         "course_sch":{
//             "courseCode": coCo.value,
//             "courseName": coNa.value,
//             "credits": cre.value,
//             "takeClassDay": TCD.value
//         },
//         "start_time": ST.value,
//         "end_time": ET.value
//     };

//     fetch("http://localhost:8080/revise_course" , {
//         method: "Post",
//         headers: {
//           "Content-Type": "application/json"  
//         },
//         body: JSON.stringify(body)
//     })
//     .then(function(response) {
//         return response.json()
//     })
//     .then(function(data) {
//         respRC.innerText = JSON.stringify(data)
//     })
//     .catch(function(error) {
//         console.log(error)
//     })
// });

couD.addEventListener("click" , function() {
    let body = {
        "course_code": coCo.value
    };

    fetch("http://localhost:8080/delete_course" , {
        method: "Post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        respRC.innerText = JSON.stringify(data , null , 2)
    })
    .catch(function(error) {
        console.log(error)
    })
});