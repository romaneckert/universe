
import { AbstractControl } from '@angular/forms';

export function ValidatePassword(control: AbstractControl) {

    let result = {
        lowerCaseLetter : true,
        capitalLetter : true,
        number : true,
        specialCharacter : true
    };

    // check contain lower case letter
    if((new RegExp("^(?=.*[a-z])")).test(control.value)) {
        result.lowerCaseLetter = false;
    }

    // check contain upper case letter
    if((new RegExp("^(?=.*[A-Z])")).test(control.value)) {
        result.capitalLetter = false;
    }

    // check contain number
    if((new RegExp("^(?=.*[0-9])")).test(control.value)) {
        result.number = false;
    }

    // check contain special char
    if((new RegExp("^(?=.*[!@#\$%\^&\*])")).test(control.value)) {
        result.specialCharacter = false;
    }

    return result;
}