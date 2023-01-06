function validateForm(){

    const firstNameInput = document.getElementById('name');
    const lastNameInput = document.getElementById('surname');
    const phoneNumberInput = document.getElementById('phoneNumber');
    const birthDateInput = document.getElementById('birthDate');

    const errorFirstName = document.getElementById('errorName');
    const errorLastName = document.getElementById('errorSurname');
    const errorPhoneNumber = document.getElementById('errorNumber');
    const errorBirhtdate = document.getElementById('errorDate');
    const errorSummary = document.getElementById('errorSummary');

    console.log("Before reset Errors");
    
    resetErrors([firstNameInput, lastNameInput, phoneNumberInput, birthDateInput], 
                [errorFirstName, errorLastName, errorPhoneNumber, errorBirhtdate]);


    console.log("AFter reset Errors");
    let valid = true;

    //validation for firstNameInput field
    if (!checkRequired(firstNameInput.value)) {
        valid = false;
        firstNameInput.classList.add("error-input");
        errorFirstName.innerText = "The field is required.";
    }else if(!checkTextLengthRange(firstNameInput.value, 2, 60)) {
        valid = false;
        firstNameInput.classList.add("error-input");
        errorFirstName.innerText = "The field should contain 2 to 60 characters.";
    }

    //validation for lastNameInput field
    if (!checkRequired(lastNameInput.value)) {
        valid = false;
        lastNameInput.classList.add("error-input");
        errorLastName.innerText = "The field is required.";
    }else if(!checkTextLengthRange(lastNameInput.value, 2, 60)) {
        valid = false;
        lastNameInput.classList.add("error-input");
        errorLastName.innerText = "The field should contain 2 to 60 characters.";
    }


    //validation for phoneNumberInput field
    if (!checkRequired(phoneNumberInput.value)) {
        valid = false;
        phoneNumberInput.classList.add("error-input");
        errorPhoneNumber.innerText = "The field is required.";
    }else if(!checkTextLengthRange(phoneNumberInput.value, 9, 9)) {
        valid = false;
        phoneNumberInput.classList.add("error-input");
        errorPhoneNumber.innerText = "The field should contain 9 digits without country code.";
    }

    //validation for birthDateInput field
    if (!checkRequired(birthDateInput.value)) {
        //ad Date validation!!! Like not grated then present timedate
        valid = false;
        birthDateInput.classList.add("error-input");
        errorBirhtdate.innerText = "The field is required.";
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









