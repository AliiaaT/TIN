function validateForm(){

    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const phoneNumberInput = document.getElementById('phoneNumber');
    const birthDateInput = document.getElementById('birthDate');

    const errorFirstName = document.getElementById('errorName');
    const errorLastName = document.getElementById('errorSurname');
    const errorPhoneNumber = document.getElementById('errorNumber');
    const errorBirhtdate = document.getElementById('errorDate');
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
    
    resetErrors([firstNameInput, lastNameInput, phoneNumberInput, birthDateInput],
                [errorFirstName, errorLastName, errorPhoneNumber, errorBirhtdate]);


    console.log("AFter reset Errors");
    let valid = true;

    //validation for firstNameInput field
    if (!checkRequired(firstNameInput.value)) {
        valid = false;
        firstNameInput.classList.add("error-input");
        errorFirstName.innerText = fieldRequired;
    }else if(!checkTextLengthRange(firstNameInput.value, 2, 60)) {
        valid = false;
        firstNameInput.classList.add("error-input");
        errorFirstName.innerText = symbols2_60;
    }

    //validation for lastNameInput field
    if (!checkRequired(lastNameInput.value)) {
        valid = false;
        lastNameInput.classList.add("error-input");
        errorLastName.innerText = fieldRequired;
    }else if(!checkTextLengthRange(lastNameInput.value, 2, 60)) {
        valid = false;
        lastNameInput.classList.add("error-input");
        errorLastName.innerText = symbols2_60;
    }


    //validation for phoneNumberInput field
    if (!checkRequired(phoneNumberInput.value)) {
        valid = false;
        phoneNumberInput.classList.add("error-input");
        errorPhoneNumber.innerText = fieldRequired;
    }else if(!checkTextLengthRange(phoneNumberInput.value, 9, 9)) {
        valid = false;
        phoneNumberInput.classList.add("error-input");
        errorPhoneNumber.innerText = symbols9;
    }
    //validation for birthDateInput before now
    if (!checkDateIfPast(birthDateInput.value)) {
        valid = false;
        birthDateInput.classList.add("error-input");
        errorBirhtdate.innerText = birthdateBiggerCurrent;
    }

    //validation for birthDateInput field
    if (!checkRequired(birthDateInput.value)) {
        valid = false;
        birthDateInput.classList.add("error-input");
        errorBirhtdate.innerText = fieldRequired;
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









