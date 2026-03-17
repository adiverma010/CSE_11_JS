function calculateGrades() 
{
    const subjects = document.getElementById('subjects').value;
    let total=0;
    for(let i=0; i<subjects; i++)
        {
            let x=parseFloat(prompt("enter the marks of subject "+(i+1))); // parseFloat is used to convert the input string to a floating-point number
            total+=x;
        }
        let avg = total / subjects;
        let grade;
        if(avg >=90)
        {
            grade = 'A';
        }
        else if(avg >=80)
        {
            grade = 'B';
        }
        else if(avg >=60)
        {
            grade = 'C';
        }
        else if(avg >=50)
        {
            grade = 'D';
        }
        else
        {
            grade = 'F';
        }
        let r;
        if(avg>=40)
        {
            r = 'Pass';
        }
        else
        {
            r = 'Fail';
        }

        let result = document.getElementById("result").innerHTML = "total marks: "+total+"<br>"+"average marks: "+avg+"<br>"+"grade: "+ grade+"<br>"+"result: "+r;
}