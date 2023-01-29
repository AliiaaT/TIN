function validateForm(){

    const modelNameInput = document.getElementById('modelName');
    const transmitionTypeInput = document.getElementById('transmitionType');
    
    const errorModelName = document.getElementById('errorModelName');
    const errorTransmitionType = document.getElementById('errorTransmitionType');

    
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
    
    resetErrors([modelNameInput, transmitionTypeInput],
                [errorModelName, errorTransmitionType]);


    console.log("AFter reset Errors");
    let valid = true;

    //validation for modelNameInput field
    if (!checkRequired(modelNameInput.value)) {
        valid = false;
        modelNameInput.classList.add("error-input");
        errorModelName.innerText = fieldRequired;
    }else if(!checkTextLengthRange(modelNameInput.value, 2, 60)) {
        valid = false;
        modelNameInput.classList.add("error-input");
        errorModelName.innerText = symbols2_60;
    }

    //validation for transmitionTypeInput field
    if (!checkRequired(transmitionTypeInput.value)) {
        valid = false;
        transmitionTypeInput.classList.add("error-input");
        errorTransmitionType.innerText = fieldRequired;
    }else if(!checkTextLengthRange(transmitionTypeInput.value, 2, 60)) {
        valid = false;
        transmitionTypeInput.classList.add("error-input");
        errorTransmitionType.innerText = symbols2_60;
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









