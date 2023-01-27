
function validateForm(){

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const priceInput = document.getElementById('price');
    const licenseInput = document.getElementById('licenseIssueDate');

    const errorName = document.getElementById('errorName');
    const errorEmail = document.getElementById('errorEmail');
    const errorPrice = document.getElementById('errorPrice');
    const errorLicense = document.getElementById('errorLicense');
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

    resetErrors([nameInput, emailInput, priceInput, licenseInput], 
                [errorName, errorEmail, errorPrice, errorLicense]
    );

    console.log("AFter reset Errors");
    let valid = true;


   //validation for name field
   if (!checkRequired(nameInput.value)) {
    valid = false;
    nameInput.classList.add("error-input");
    errorName.innerText = fieldRequired;
}else if(!checkTextLengthRange(nameInput.value, 2, 60)) {
    valid = false;
    nameInput.classList.add("error-input");
    errorName.innerText = symbols2_60;
}


//validation for email field
if (!checkRequired(emailInput.value)) {
    valid = false;
    emailInput.classList.add("error-input");
    errorEmail.innerText = fieldRequired;
} else if (!checkEmailValid(emailInput.value)) {
    valid = false;
    emailInput.classList.add("error-input");
    errorEmail.innerText = validEmail;
}



//validation for price field
if (!checkRequired(priceInput.value)) {
    //add Price  validation!!!
    valid = false;
    priceInput.classList.add("error-input");
    errorPrice.innerText = fieldRequired;
}

//validation for license field
if (!checkDateIfPast(licenseInput.value)) {
    valid = false;
    licenseInput.classList.add("error-input");
    errorLicense.innerText = licenseIssue;
}

//validation for license field
if (!checkRequired(licenseInput.value)) {
    valid = false;
    licenseInput.classList.add("error-input");
    errorLicense.innerText = fieldRequired;
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










