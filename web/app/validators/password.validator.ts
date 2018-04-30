
import { AbstractControl } from '@angular/forms';

export function ValidatePassword(control: AbstractControl) {

    const errors = {
        minLength: control.value.length < 8,
        lowerCaseLetter: !(new RegExp("^(?=.*[a-z])")).test(control.value),
        capitalLetter: !(new RegExp("^(?=.*[A-Z])")).test(control.value),
        number: !(new RegExp("^(?=.*[0-9])")).test(control.value)
    }

    for (let error in errors) {
        if (errors[error]) return errors;
    }

    return {};
}
