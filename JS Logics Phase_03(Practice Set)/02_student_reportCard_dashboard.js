let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");

let report = document.querySelector("#report");

let showConsole = true;     

let student1 = {
    name: "SENSEI_SS",
    rollNo: 101,
    course: "AI & ML",
    marks: 96
};

let student2 = {
    name: "APSJ",
    rollNo: 102,
    course: "DATA SCIENCE",
    marks: 98
};

let student3 = {
    name: "HI-TECH",
    rollNo: 103,
    course: "CYBERSECURITY",
    marks: 99
};

function displayReport(examName){

    let grade;

    if(this.marks >= 90){
        grade = "A+";
    }
    else if(this.marks >= 80){
        grade = "A";
    }
    else if(this.marks >= 70){
        grade = "B";
    }
    else if(this.marks >= 60){
        grade = "C";
    }
    else{
        grade = "Fail";
    }

    if(showConsole){

        console.clear();

        console.table(this);

        console.log(`
========== STUDENT REPORT ==========
Name   : ${this.name}
RollNo : ${this.rollNo}
Course : ${this.course}
Marks  : ${this.marks}
Grade  : ${grade}
Exam   : ${examName}
====================================
`);

        report.textContent =
        "🖥 Report printed in Console.\n\nClick again to display it on Dashboard.";

    }
    else{

        report.textContent = `
🎓 STUDENT REPORT CARD

Name      : ${this.name}
Roll No   : ${this.rollNo}
Course    : ${this.course}
Marks     : ${this.marks}
Grade     : ${grade}
Exam      : ${examName}
`;

    }

    showConsole = !showConsole;
}

btn1.addEventListener("click",function(){

    displayReport.call(student1,"End Semester");

});

btn2.addEventListener("click",function(){

    displayReport.apply(student2,["End Semester"]);

});

btn3.addEventListener(
    "click",
    displayReport.bind(student3,"Mid Semester")
);