// @CrossOrigin加在controller裡面

const stId = document.querySelector("#studId");
const nam = document.querySelector("#name");
const stuA = document.querySelector("#stuAdd");
const stuR = document.querySelector("#stuRev");
const stuD = document.querySelector("#stuDele");
const respRS = document.querySelector("#respRevStu");

stuA.addEventListener("click" , function() {
    let body = {
    "student_list": [
        {
            "studId": stId.value,
            "name": nam.value
        }
    ]
    };

    fetch("http://localhost:8080/add_stu_id" , {
    method: "Post",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(body)
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        respRS.innerText = JSON.stringify(data , null , 2);
    })
    .catch(function(error) {
        console.log(error);
    })
});

// stuR.addEventListener("click" , function() {
//     let body = {
//         "student_list": [
//             {
//                 "studId": stId.value,
//                 "name": nam.value
//             }
//         ]
//     };

//     fetch("http://localhost:8080/revise_stud_id" , {
//         method: "Post",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body:JSON.stringify(body)
//     })
//     .then(function(response) {
//         return response.json()
//     })
//     .then(function(data) {
//         respRS.innerText = JSON.stringify(data , null , 2);
//     })
//     .catch(function(error) {
//         console.log(error);
//     })
// });

stuD.addEventListener("click" , function() {
    let body = {
        "stud_id": stId.value
    };

    fetch("http://localhost:8080/delete_stud_id" , {
        method: "Post",
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify(body)
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        respRS.innerText = JSON.stringify(data , null , 2);
    })
    .catch(function(error) {
        console.log(error);
    })
});

