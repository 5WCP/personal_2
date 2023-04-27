const stIdS = document.querySelector("#studIdS");
const seBtn = document.querySelector("#searBtn");
const seCou = document.querySelector("#searCou");

seBtn.addEventListener("click" , function() {
    let body = {
        "stud_id": stIdS.value
    };

    fetch("http://localhost:8080/search_stu_sele_cour" , {
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
        seCou.innerText = JSON.stringify(data , null , 2);
    })
    .catch(function(error) {
        console.log(error);
    })
});