// @CrossOrigin加在controller裡面

const stId1 = document.querySelector("#studId1");
const nam1 = document.querySelector("#name1");
const stId2 = document.querySelector("#studId2");
const nam2 = document.querySelector("#name2");
const stuA = document.querySelector("#stuAdd");
const stuR = document.querySelector("#stuRev");
const stuD = document.querySelector("#stuDele");
const respRS = document.querySelector("#respRevStu");
const mge = document.querySelector("#message");

stuA.addEventListener("click" , function() {
    let stuList = [];

    if(stId1.value && nam1.value) {
        stuList.push({
            "studId": stId1.value,
            "name": nam1.value  
        });
    }

    if(stId2.value && nam2.value) {
        stuList.push({
            "studId": stId2.value,
            "name": nam2.value  
        });
    }

    let body = {
    "student_list": stuList
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
        const checkData = JSON.parse(JSON.stringify(data));
        let resp = "";

        if(checkData.message) {
            const message = checkData.message.replace(/\n/g, '\u00A0<br>\u00A0');
            mge.innerHTML = "\u00A0" + `${message}` + "\u00A0";
        }

        if(checkData.student_list) {
            const stu = checkData.student_list;

            stu.forEach(function(i) {
                resp += `<li>學號&nbsp;:&nbsp;${i.studId}</li>`
                + `<li>學生姓名&nbsp;:&nbsp;${i.name}</li>`
                + `<li>&nbsp;選修總學分數&nbsp;:&nbsp;${i.totalCredits}&nbsp;</li>`
                + `<hr>`;
            })
        }

        respRS.innerHTML = resp;
    })
    .catch(function(error) {
        console.log(error);
    })
});

stuR.addEventListener("click" , function() {
    let stuList = [];

    if(stId1.value && nam1.value) {
        stuList.push({
            "studId": stId1.value,
            "name": nam1.value  
        });
    }

    if(stId2.value && nam2.value) {
        stuList.push({
            "studId": stId2.value,
            "name": nam2.value  
        });
    }

    let body = {
        "student_list": stuList
    };
    

    fetch("http://localhost:8080/revise_stud_id" , {
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
        const checkData = JSON.parse(JSON.stringify(data));
        let resp = "";

        if(checkData.message) {
            const message = checkData.message.replace(/\n/g, '\u00A0<br>\u00A0');
            mge.innerHTML = "\u00A0" + `${message}` + "\u00A0";
        }

        if(checkData.student_list) {
            const stu = checkData.student_list;

            stu.forEach(function(i) {
                resp += `<li>學號&nbsp;:&nbsp;${i.studId}</li>`
                + `<li>學生姓名&nbsp;:&nbsp;${i.name}</li>`
                + `<li>&nbsp;選修總學分數&nbsp;:&nbsp;${i.totalCredits}&nbsp;</li>`
                + `<hr>`;
            })
        }

        respRS.innerHTML = resp;
    })
    .catch(function(error) {
        console.log(error);
    })
});

stuD.addEventListener("click" , function() {
    let stuList = [];

    if(stId1.value && nam1.value) {
        stuList.push({
            "studId": stId1.value,
            "name": nam1.value  
        });
    }

    if(stId2.value && nam2.value) {
        stuList.push({
            "studId": stId2.value,
            "name": nam2.value  
        });
    }

    let body = {
        "student_list": stuList
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
        const checkData = JSON.parse(JSON.stringify(data));
        let resp = "";

        if(checkData.message) {
            const message = checkData.message.replace(/\n/g, '\u00A0<br>\u00A0');
            mge.innerHTML = "\u00A0" + `${message}` + "\u00A0";
        }

        if(checkData.student_list) {
            const stu = checkData.student_list;

            stu.forEach(function(i) {
                resp += `<li>學號&nbsp;:&nbsp;${i.studId}</li>`
                + `<li>學生姓名&nbsp;:&nbsp;${i.name}</li>`
                + `<li>&nbsp;選修總學分數&nbsp;:&nbsp;${i.totalCredits}&nbsp;</li>`
                + `<hr>`;
            })
        }

        respRS.innerHTML = resp;
    })
    .catch(function(error) {
        console.log(error);
    })
});

