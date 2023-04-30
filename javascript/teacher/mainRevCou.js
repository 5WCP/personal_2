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
const mge = document.querySelector("#message");

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
        const checkData = JSON.parse(JSON.stringify(data));
        let resp = "";
        
        if(checkData.message) {
            mge.textContent = "\u00A0" + `${checkData.message}` + "\u00A0";
        }

        if(checkData.course_sch) {
            const Cou = checkData.course_sch;

            resp += `<li>課程代碼&nbsp;:&nbsp;${Cou.courseCode}</li>`
            + `<li>課程名稱&nbsp;:&nbsp;${Cou.courseName}</li>`
            + `<li>學分數&nbsp;:&nbsp;${Cou.credits}</li>`
            + `<li>上課日&nbsp;:&nbsp;${Cou.takeClassDay}</li>`
            + `<li>&nbsp;上課時間&nbsp;:&nbsp;${Cou.startTime + " ~ " + Cou.endTime}&nbsp;</li>`
            + `<li>選修人數&nbsp;:&nbsp;${Cou.stuCount}</li>`;
        }

        respRC.innerHTML = resp;
    })
    .catch(function() {
        console.log(error)
    })
});

couR.addEventListener("click" , function() {
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

    fetch("http://localhost:8080/revise_course" , {
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
        const checkData = JSON.parse(JSON.stringify(data));
        let resp = "";
        
        if(checkData.message) {
            mge.textContent = "\u00A0" + `${checkData.message}` + "\u00A0";
        }

        if(checkData.course_sch) {
            const Cou = checkData.course_sch;

            resp += `<li>課程代碼&nbsp;:&nbsp;${Cou.courseCode}</li>`
            + `<li>課程名稱&nbsp;:&nbsp;${Cou.courseName}</li>`
            + `<li>學分數&nbsp;:&nbsp;${Cou.credits}</li>`
            + `<li>上課日&nbsp;:&nbsp;${Cou.takeClassDay}</li>`
            + `<li>&nbsp;上課時間&nbsp;:&nbsp;${Cou.startTime + " ~ " + Cou.endTime}&nbsp;</li>`
            + `<li>選修人數&nbsp;:&nbsp;${Cou.stuCount}</li>`;
        }

        respRC.innerHTML = resp;
    })
    .catch(function(error) {
        console.log(error)
    })
});

couD.addEventListener("click" , function() {
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
        const checkData = JSON.parse(JSON.stringify(data));
        let resp = "";

        if(checkData.course_code) {
            resp += `<li>&nbsp;課程代碼&nbsp;:&nbsp;${checkData.course_code}&nbsp;</li>`;
        }
        
        if(checkData.message) {
            mge.textContent = "\u00A0" + `${checkData.message}` + "\u00A0";
        }

        if(checkData.course_sch) {
            const Cou = checkData.course_sch;

            resp += `<li>課程代碼&nbsp;:&nbsp;${Cou.courseCode}</li>`
            + `<li>課程名稱&nbsp;:&nbsp;${Cou.courseName}</li>`
            + `<li>學分數&nbsp;:&nbsp;${Cou.credits}</li>`
            + `<li>上課日&nbsp;:&nbsp;${Cou.takeClassDay}</li>`
            + `<li>&nbsp;上課時間&nbsp;:&nbsp;${Cou.startTime + " ~ " + Cou.endTime}&nbsp;</li>`
            + `<li>選修人數&nbsp;:&nbsp;${Cou.stuCount}</li>`;
        }

        respRC.innerHTML = resp;
    })
    .catch(function(error) {
        console.log(error)
    })
});