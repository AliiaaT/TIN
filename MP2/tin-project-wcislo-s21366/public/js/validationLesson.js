
function validateForm(){

    const studentInput = document.getElementById('student');
    const instructorInput = document.getElementById('instructor');
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');

    const errorStudent = document.getElementById('errorSName');
    const errorInstructor = document.getElementById('errorIName');
    const errorSDate = document.getElementById('errorSNumber');
    const errorEDate = document.getElementById('errorENumber');
    const errorSummary = document.getElementById('errorSummary');

    console.log("Before reset Errors");

    resetErrors([studentInput, instructorInput, startDateInput, endDateInput], 
                [errorStudent, errorInstructor, errorSDate, errorEDate]
    );


    console.log("AFter reset Errors");
    let valid = true;


    //validation for Student field
    if (!checkDropboxSelected(studentInput)) {
        valid = false;
        studentInput.classList.add("error-input");
        errorStudent.innerText = "The field is required.";
    }

    //validation for Student field
    if (!checkDropboxSelected(instructorInput)) {
        valid = false;
        instructorInput.classList.add("error-input");
        errorInstructor.innerText = "The field is required.";
    }



    //validation endDateInput after startDate
    if (!checkDateTimeIfAfter(endDateInput.value, startDateInput.value)) {
        valid = false;
        endDateInput.classList.add("error-input");
        errorEDate.innerText = "The End Date should be later than the Start Date.";
    }

    if (!checkDateIfFuture(startDateInput.value)) {
        valid = false;
        startDateInput.classList.add("error-input");
        errorSDate.innerText = "The time should be in future.";
    }

    //validation for startDate field
    if (!checkRequired(startDateInput.value)) {
        valid = false;
        startDateInput.classList.add("error-input");
        errorSDate.innerText = "The field is required.";
    }

    


    //validation for endDate field
    if (!checkRequired(endDateInput.value)) {
        valid = false;
        endDateInput.classList.add("error-input");
        errorEDate.innerText = "The field is required.";
    }

    if (valid) {
        errorSummary.style.visibility = "hidden";
        const conf = confirm('Do you want to add the record?');
        return conf
    } else {
        errorSummary.style.visibility = "visible";
        return false;
    }
    

};









