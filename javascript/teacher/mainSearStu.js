const stu = document.querySelector("#student");
const searI = document.querySelector("#searId");
const searN = document.querySelector("#searName");
const searA = document.querySelector("#searAll");
const respSI = document.querySelector("#respRevStu");
const mge = document.querySelector("#message");

searI.addEventListener("click" , function() {
    let body = {
        "stud_id": stu.value
    };

    fetch("http://localhost:8080/get_stu" , {
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
        const checkData = JSON.parse(JSON.stringify(data));
        let resp = "";

        if(checkData.message) {
            mge.textContent = "\u00A0" + `${checkData.message}` + "\u00A0";
        }

        if(checkData.student) {
            const stu = checkData.student;

            resp += `<li>學號&nbsp;:&nbsp;${stu.studId}</li>`
            + `<li>學生姓名&nbsp;:&nbsp;${stu.name}</li>`
            + `<li>&nbsp;學生總學分數&nbsp;:&nbsp;${stu.totalCredits}&nbsp;</li>`;
        }

        respSI.innerHTML = resp;
    })
    .catch(function(error) {
        console.log(error)
    })
});

searN.addEventListener("click" , function() {
    let body = {
        "name": stu.value
    };

    fetch("http://localhost:8080/find_stu_by_name" , {
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
        const checkData = JSON.parse(JSON.stringify(data));
        let resp = "";

        if(checkData.message) {
            mge.textContent = "\u00A0" + `${checkData.message}` + "\u00A0";
        }

        if(checkData.student_list) {
            const stuList = checkData.student_list;

            resp += `<li>總共${stuList.length}筆</li>`
            + `<hr>`

            stuList.forEach(function(i) {
                resp += `<li>學號&nbsp;:&nbsp;${i.studId}</li>`
                + `<li>學生姓名&nbsp;:&nbsp;${i.name}</li>`
                + `<li>&nbsp;學生總學分數&nbsp;:&nbsp;${i.totalCredits}&nbsp;</li>`
                + `<hr>`
            })
        }

        respSI.innerHTML = resp;
    })
    .catch(function(error) {
        console.log(error)
    })
});

searA.addEventListener("click" , function() {
    fetch("http://localhost:8080/get_all_stu" , {
        method: "Post",
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        const checkData = JSON.parse(JSON.stringify(data));
        let resp = "";
        
        mge.textContent = "\u00A0" + "查詢成功" + "\u00A0";

        if(checkData) {

            resp += `<li>總共${checkData.length}筆</li>`
            + `<hr>`

            checkData.forEach(function(i) {
                resp += `<li>學號&nbsp;:&nbsp;${i.studId}</li>`
                + `<li>學生姓名&nbsp;:&nbsp;${i.name}</li>`
                + `<li>&nbsp;學生總學分數&nbsp;:&nbsp;${i.totalCredits}&nbsp;</li>`
                + `<hr>`
            })
        }

        respSI.innerHTML = resp;
    })
    .catch(function(error) {
        console.log(error)
    })
});