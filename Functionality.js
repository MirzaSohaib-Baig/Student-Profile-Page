// Random name list
var courses = ["System Communication", "Software Design", "Software Architecture", "Data Communication and Networking", 'Database Systems', 'Information Technology', 'Data Structure and Algorithms ', 'Ethical Hacking']
var list;
//This declarative function will be called on 'Add New Row' button click and add new row 
function addCourse() {
    //1 - Find the 'body' element 
        const body = document.querySelector('tbody');
    //2 - Create elements using document.createElement API (method)
        const row = document.createElement('tr');
    //Create 'tr' element 
        const tdCourseID = document.createElement('td');
    //Create 'td' element 
        const tdCourseName = document.createElement('td');
    //Create 'td' element
        const tdCreditHours = document.createElement('td');
    //Create 'td' element 
        const tdYear = document.createElement('td');
    //Create 'td' element
        const courseId = ((Math.round(Math.random() * 100)) + 300); 
        const courseName = courses[Math.floor(Math.random() * courses.length)];
        const creditHours = (Math.round(Math.random() * 2) + 3);
        const year = (Math.round(Math.random() * 2020) + 2020);
        row.id = 'row' + courseId; 
    //3 - Update td's 'innerHTML' (basically element content - anything within the angle brackets) 
        tdCourseID.innerHTML = 'CS-' + courseId; 
        tdCourseName.innerHTML = courseName; 
        tdCreditHours.innerHTML = creditHours;
        tdYear.innerHTML = year; 
    //4 - Insert newly created 'td's into newly created 'tr' using element's appendChild API 
        row.appendChild(tdCourseID); 
        row.appendChild(tdCourseName); 
        row.appendChild(tdCreditHours);
        row.appendChild(tdYear); 
    //5 - Finally insert newly created 'row' into 'body' element 
        body.appendChild(row); 
}

function deleteCourse() { 
    //Ask for course# using prompt 
    const courseId = prompt('Please enter Course#'); 
    //If user has entered course# 
    if(courseId) { 
    //Find the row containing the 'course #' entered by the user 
        const row = document.getElementById('row' + courseId);
        if(row) { 
        //Find the parent of the 'row' just found so that it can be removed from its child list 
            const body = document.querySelector('tbody'); 
        //Finally remove it from 'tbody' element 
            body.removeChild(row); 
        } 
    } 
}

function updateCourse() {
    const courseId = prompt('Enter Course#,New Course Name')
    if(courseId) {
        var txt = courseId.split(",")
        var id = txt[0]
        var subname = txt[1]
        const row = document.getElementById('row' + id)
        d = row.children[1]
        d.textContent = subname
    }
}