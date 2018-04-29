
import { AbstractControl } from '@angular/forms';
import { lowerCase } from '../../../common/validator';

export function ValidatePassword(control: AbstractControl) {

    return {
        required: control.value.length === 0,
        minLength: control.value.length < 8,
        lowerCaseLetter: !(new RegExp("^(?=.*[a-z])")).test(control.value),
        capitalLetter: !(new RegExp("^(?=.*[A-Z])")).test(control.value),
        number: !(new RegExp("^(?=.*[0-9])")).test(control.value)
    };
}
