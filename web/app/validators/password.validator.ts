
import { AbstractControl } from '@angular/forms';

export function ValidatePassword(control: AbstractControl) {

    if (control.value.length === 0) return {
        required: true
    };

    if (control.value.length < 8) return {
        minLength: true
    };

    if (!(new RegExp("^(?=.*[a-z])")).test(control.value)) return {
        lowerCaseLetter: true
    };

    if (!(new RegExp("^(?=.*[A-Z])")).test(control.value)) return {
        capitalLetter: true
    };

    if (!(new RegExp("^(?=.*[0-9])")).test(control.value)) return {
        number: true
    };
}
