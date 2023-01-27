
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

    
    const fieldRequired = document.getElementById('errors.the-field-is-required').innerText;
    const symbols2_60 = document.getElementById('errors.2-60-symbols').innerText;
    const symbols9 = document.getElementById('errors.9-symbols').innerText;
    const birthdateBiggerCurrent = document.getElementById('errors.birthdate-bigger-current').innerText;
    const dateShouldBeInFuture = document.getElementById('errors.date-should-be-in-future').innerText;
    const endDateAfterStartDate = document.getElementById('errors.end-date-after-start-date').innerText;
    const licenseIssue = document.getElementById('errors.license-date-less-current-date').innerText;
    const validEmail = document.getElementById('errors.valid-email').innerText;
    const questionAddRecord = document.getElementById('errors.question-add-record').innerText;


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
        errorStudent.innerText = fieldRequired;
    }

    //validation for Student field
    if (!checkDropboxSelected(instructorInput)) {
        valid = false;
        instructorInput.classList.add("error-input");
        errorInstructor.innerText = fieldRequired;
    }



    //validation endDateInput after startDate
    if (!checkDateTimeIfAfter(endDateInput.value, startDateInput.value)) {
        valid = false;
        endDateInput.classList.add("error-input");
        errorEDate.innerText = endDateAfterStartDate;
    }

    if (!checkDateIfFuture(startDateInput.value)) {
        valid = false;
        startDateInput.classList.add("error-input");
        errorSDate.innerText = dateShouldBeInFuture;
    }

    //validation for startDate field
    if (!checkRequired(startDateInput.value)) {
        valid = false;
        startDateInput.classList.add("error-input");
        errorSDate.innerText = fieldRequired;
    }

    //validation for endDate field
    if (!checkRequired(endDateInput.value)) {
        valid = false;
        endDateInput.classList.add("error-input");
        errorEDate.innerText = fieldRequired;
    }

    if (valid) {
        errorSummary.style.visibility = "hidden";
        const conf = confirm(questionAddRecord);
        return conf
    } else {
        errorSummary.style.visibility = "visible";
        return false;
    }
    

};









