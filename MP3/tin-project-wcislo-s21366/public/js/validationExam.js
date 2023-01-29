
function validateForm(){

    const studentInput = document.getElementById('student');
    const instructorInput = document.getElementById('instructor');
    const vehicleInput = document.getElementById('vehicle');
    const startDateInput = document.getElementById('startDate');

    const errorStudent = document.getElementById('errorSName');
    const errorInstructor = document.getElementById('errorIName');
    const errorVehicle = document.getElementById('errorVName');
    const errorSDate = document.getElementById('errorSNumber');
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

    resetErrors([studentInput, instructorInput, startDateInput, vehicleInput], 
                [errorStudent, errorInstructor, errorSDate, errorVehicle]
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

    //validation for Vehicle field
    if (!checkDropboxSelected(vehicleInput)) {
        valid = false;
        vehicleInput.classList.add("error-input");
        errorVehicle.innerText = fieldRequired;
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

    if (valid) {
        errorSummary.style.visibility = "hidden";
        const conf = confirm(questionAddRecord);
        return conf
    } else {
        errorSummary.style.visibility = "visible";
        return false;
    }
};
