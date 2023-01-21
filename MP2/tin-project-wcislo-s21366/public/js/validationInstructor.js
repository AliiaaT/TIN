
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
    errorName.innerText = "The field is required.";
}else if(!checkTextLengthRange(nameInput.value, 2, 60)) {
    valid = false;
    nameInput.classList.add("error-input");
    errorName.innerText = "The field should contain 2 to 60 characters.";
}


//validation for email field
if (!checkRequired(emailInput.value)) {
    valid = false;
    emailInput.classList.add("error-input");
    errorEmail.innerText = "The field is required.";
} else if (!checkEmailValid(emailInput.value)) {
    valid = false;
    emailInput.classList.add("error-input");
    errorEmail.innerText = "Invalid email format.";
}



//validation for price field
if (!checkRequired(priceInput.value)) {
    //add Price  validation!!!
    valid = false;
    priceInput.classList.add("error-input");
    errorPrice.innerText = "The field is required.";
}

//validation for license field
if (!checkDateIfPast(licenseInput.value)) {
    valid = false;
    licenseInput.classList.add("error-input");
    errorLicense.innerText = "License issue date should be less than current date.";
}

//validation for license field
if (!checkRequired(licenseInput.value)) {
    valid = false;
    licenseInput.classList.add("error-input");
    errorLicense.innerText = "The field is required.";
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










