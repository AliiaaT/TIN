//Clear previous form errors messages by calling the resetErrors function
function resetErrors(inputs, errorTexts) {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove("error-input");
    }

    for (let i = 0; i < errorTexts.length; i++) {
        errorTexts[i].innerText = "";
    }
}


//verification whether the field has been filled
function checkRequired(value) {
    if(!value){
        return false;
    }

    value = value.toString().trim();
    if(value ===""){
        return false;
    }
    return true;
};

//verification whether the field has been filled
function checkDropboxSelected(selectElement) {
    return selectElement.selectedIndex > 0;
};


//verification whether the field value has the desired length
function checkTextLengthRange(value, min, max) {
    if(!value){
        return false;
    }

    value = value.toString().trim();
    const length = value.length;
    if(length>max){ //deleted max &&
        return false;
    }
    if(length<min){ //deleted min &&
        return false;
    }
    return true;
};


