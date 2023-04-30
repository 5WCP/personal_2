const cour = document.querySelector("#course");
const searC = document.querySelector("#searCode");
const searN = document.querySelector("#searName");
const searA = document.querySelector("#searAll");
const searR = document.querySelector("#searResp");
const mge = document.querySelector("#message");

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
        let resp = "";
        const checkData = JSON.parse(JSON.stringify(data));
        
        if(checkData.course_code){
            resp += `<li>&nbsp;課程代碼&nbsp;:&nbsp;${checkData.course_code}&nbsp;</li>`;
        }

        if(checkData.message){
            mge.textContent = "\u00A0" + `${checkData.message}` + "\u00A0";
        }

        if(checkData.course_sch){
            const Cou = checkData.course_sch;
        
            resp += `<li>課程代碼&nbsp;:&nbsp;${Cou.courseCode}</li>`
            + `<li>課程名稱&nbsp;:&nbsp;${Cou.courseName}</li>`
            + `<li>學分數&nbsp;:&nbsp;${Cou.credits}</li>`
            + `<li>上課日&nbsp;:&nbsp;${Cou.takeClassDay}</li>`
            + `<li>&nbsp;上課時間&nbsp;:&nbsp;${Cou.startTime + " ~ " + Cou.endTime}&nbsp;</li>`
            + `<li>選修人數&nbsp;:&nbsp;${Cou.stuCount}</li>`;
        }

        searR.innerHTML = resp;
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
        let allCou = [];
        let resp = "";
        const checkData = JSON.parse(JSON.stringify(data));

        if(checkData.message){
            mge.textContent = "\u00A0" + `${checkData.message}` + "\u00A0";
        }
        
        if(checkData.course_sch_list) {
            allCou = checkData.course_sch_list;

            resp += `<li>總共${allCou.length}筆</li>`
            + `<hr>`;

            allCou.forEach(function(i) {
            resp += `<li>課程代碼&nbsp;:&nbsp;${i.courseCode}</li>`
            + `<li>課程名稱&nbsp;:&nbsp;${i.courseName}</li>`
            + `<li>學分數&nbsp;:&nbsp;${i.credits}</li>`
            + `<li>上課日&nbsp;:&nbsp;${i.takeClassDay}</li>`
            + `<li>&nbsp;上課時間&nbsp;:&nbsp;${i.startTime + " ~ " + i.endTime}&nbsp;</li>`
            + `<li>選修人數&nbsp;:&nbsp;${i.stuCount}</li>`
            + `<hr>`;
            })
        }

        searR.innerHTML = resp;
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
        let allCou = [];
        let resp = "";
        allCou = JSON.parse(JSON.stringify(data));

        mge.textContent = "\u00A0" + "查詢成功" + "\u00A0";
        
        resp += `<li>總共${allCou.length}筆</li>`
        + `<hr>`;

        allCou.forEach(function(i) {
            resp += `<li>課程代碼&nbsp;:&nbsp;${i.courseCode}</li>`
            + `<li>課程名稱&nbsp;:&nbsp;${i.courseName}</li>`
            + `<li>學分數&nbsp;:&nbsp;${i.credits}</li>`
            + `<li>上課日&nbsp;:&nbsp;${i.takeClassDay}</li>`
            + `<li>&nbsp;上課時間&nbsp;:&nbsp;${i.startTime + " ~ " + i.endTime}&nbsp;</li>`
            + `<li>選修人數&nbsp;:&nbsp;${i.stuCount}</li>`
            + `<hr>`;

            searR.innerHTML = resp;
        })
    })
    .catch(function(error) {
        console.log(error);
    })
});