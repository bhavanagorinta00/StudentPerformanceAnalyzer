let students = [];

function addStudent(){

    let name =
        document.getElementById("name").value;

    let m1 =
        Number(document.getElementById("m1").value);

    let m2 =
        Number(document.getElementById("m2").value);

    let m3 =
        Number(document.getElementById("m3").value);

    if(name==="" || isNaN(m1) || isNaN(m2) || isNaN(m3)){
        alert("Enter all details");
        return;
    }

    let total = m1+m2+m3;

    let average = total/3;

    let grade;

    if(average>=90)
        grade="A+";
    else if(average>=75)
        grade="A";
    else if(average>=60)
        grade="B";
    else if(average>=40)
        grade="C";
    else
        grade="F";

    students.push({
        name,
        m1,
        m2,
        m3,
        total,
        average,
        grade
    });

    document.getElementById("name").value="";
    document.getElementById("m1").value="";
    document.getElementById("m2").value="";
    document.getElementById("m3").value="";
}

function showReport(){

    if(students.length===0){
        alert("No Student Data");
        return;
    }

    let highest =
        Math.max(...students.map(s=>s.total));

    let lowest =
        Math.min(...students.map(s=>s.total));

    let output = `
        <table>

        <tr>
            <th>Name</th>
            <th>Total</th>
            <th>Average</th>
            <th>Grade</th>
        </tr>
    `;

    students.forEach(s=>{

        output += `
        <tr>
            <td>${s.name}</td>
            <td>${s.total}</td>
            <td>${s.average.toFixed(2)}</td>
            <td>${s.grade}</td>
        </tr>
        `;
    });

    output += `
        </table>

        <h3>Highest Score : ${highest}</h3>

        <h3>Lowest Score : ${lowest}</h3>
    `;

    document.getElementById("report")
    .innerHTML = output;
}