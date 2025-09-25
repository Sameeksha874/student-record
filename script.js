
    const studentForm = document.getElementById('student form');
    const studentList = document.getElementById('studentList');
    const errorDiv = document.getElementById('error');
    const students = [];

    studentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const studentID = document.getElementById('studentID').value;
        const studentName = document.getElementById('name').value;
        const studentAge = document.getElementById('age').value;
        try{
            addstudent(studentID, studentName, studentAge);
            displayStudents();
            errorDiv.textContent = '';
        }catch(error){
            errorDiv.textContent = error.message;
        }
        studentForm.reset();
    });
    function addstudent(id, name, age) {
        if (!id || !name || !age) {
            throw new Error('All fields are required');
        }
        if (isNaN(age) || age <= 0) {
            throw new Error('Age must be a positive number');
        }
        const studentexists = students.some(student => student.id === id);

        if (studentexists) {
            throw new Error('Student ID must be unique');
        }
        const student = { id, name, age:parseInt(age,10) 
        };
        students.push(student);
    }
    function displayStudents() {
        studentList.innerHTML = '';
        student.forEach(student => {
            const li = document.createElement('li');
            li.textContent = `ID: ${student.id}, Name: ${student.name}, Age: ${student.age}`;
            studentList.appendChild(li);
        });
    }
        