const stIdS = document.querySelector("#studIdS");
const seBtn = document.querySelector("#searBtn");
const seCou = document.querySelector("#searCou");
const mge = document.querySelector("#message");

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
        const checkData = JSON.parse(JSON.stringify(data));
        let resp = "";

        if(checkData.message) {
            mge.textContent = "\u00A0" + `${checkData.message}` + "\u00A0";
        }

        if(checkData.student) {
            const stu = checkData.student;

            resp += `<li>學號&nbsp;:&nbsp;${stu.studId}</li>`
            + `<li>學生姓名&nbsp;:&nbsp;${stu.name}</li>`
            + `<li>選修總學分數&nbsp;:&nbsp;${stu.totalCredits}</li>`
            + `<li>已選課程如下&nbsp;:&nbsp;</li>`;
        }

        if(checkData.course_sch_list) {
            const stuCou =  checkData.course_sch_list;

            resp += `<li>(共${stuCou.length}筆)</li>`
            + `<li>----------------------</li>`;

            stuCou.forEach(function(i) {
                resp += `<li>課程代碼&nbsp;:&nbsp;${i.courseCode}</li>`
                + `<li>課程名稱&nbsp;:&nbsp;${i.courseName}</li>`
                + `<li>學分數&nbsp;:&nbsp;${i.credits}</li>`
                + `<li>上課日&nbsp;:&nbsp;${i.takeClassDay}</li>`
                + `<li>&nbsp;上課時間&nbsp;:&nbsp;${i.startTime + " ~ " + i.endTime}&nbsp;</li>`
                + `<li>選修人數&nbsp;:&nbsp;${i.stuCount}</li>`
                + `<hr>`;
            })
        }

        seCou.innerHTML = resp;
    })
    .catch(function(error) {
        console.log(error);
    })
});