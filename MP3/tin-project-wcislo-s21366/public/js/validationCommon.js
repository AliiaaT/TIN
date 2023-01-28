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

function checkEmailValid(value) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        return true;
    } else {
        return false;
    }
}

function checkDateTimeIfAfter(value, compareTo) {
    if (!value) {
        return false;
    }

    if (!compareTo) {
        return false;
    }

    const pattern = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/;

    if (!pattern.test(value)) {
        return false;
    }

    if (!pattern.test(compareTo)) {
        return false;
    }

    const valueDate = new Date(value);
    const compareToDate = new Date(compareTo);
    if (valueDate.getTime() < compareToDate.getTime()) {
        return false;
    }

    return true;
}

function checkDateIfPast(value) {
    if (!value) {
        return false;
    }

    const pattern = /(\d{4})-(\d{2})-(\d{2})/;
    if (!pattern.test(value)) {
        return false;
    }

    const valueDate = new Date(value);
    const now = new Date();
    if (valueDate.getTime() > now.getTime()) {
        return false;
    }

    return true;
}

function checkDateIfFuture(value) {
    if (!value) {
        return false;
    }

    const pattern = /(\d{4})-(\d{2})-(\d{2})/;
    if (!pattern.test(value)) {
        return false;
    }

    const valueDate = new Date(value);
    const now = new Date();
    if (valueDate.getTime() < now.getTime()) {
        return false;
    }

    return true;
}


