const stIdC = document.querySelector("#studIdC");
const co1 = document.querySelector("#courseCode1");
const co2 = document.querySelector("#courseCode2");
const co3 = document.querySelector("#courseCode3");
const addB = document.querySelector("#addBtn");
const wiB = document.querySelector("#wiBtn");
const coList = document.querySelector("#couList");
const mge = document.querySelector("#message");

addB.addEventListener("click" , function() {
    let couList = [];

    if(co1.value) {
        couList.push(co1.value)
    }

    if(co2.value) {
        couList.push(co2.value)
    }

    if(co3.value) {
        couList.push(co3.value)
    }
    
    let body = {
        "stud_id" : stIdC.value,
        "course_code_list" : couList
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
        const checkData = JSON.parse(JSON.stringify(data));
        let resp = "";

        if(checkData.message) {
            const message = checkData.message.replace(/\n/g, '\u00A0<br>\u00A0');
            mge.innerHTML = "\u00A0" + `${message}` + "\u00A0";
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

        coList.innerHTML = resp;
    })
    .then(function(error) {
        console.log(error);
    })
})

wiB.addEventListener("click" , function() {
    let couList = [];

    if(co1.value) {
        couList.push(co1.value)
    }

    if(co2.value) {
        couList.push(co2.value)
    }

    if(co3.value) {
        couList.push(co3.value)
    }
    
    let body = {
        "stud_id" : stIdC.value,
        "course_code_list" : couList
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
        const checkData = JSON.parse(JSON.stringify(data));
        let resp = "";

        if(checkData.message) {
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

        coList.innerHTML = resp;
    })
    .then(function(error) {
        console.log(error);
    })
})