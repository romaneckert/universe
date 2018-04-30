import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ValidatePassword } from "../validators/password.validator";

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html'
})
export class SignUpComponent implements OnInit {

    signUpForm: FormGroup;
    email: FormControl;
    password: FormControl;

    ngOnInit() {
        this.email = new FormControl('', [
            Validators.required,
            Validators.pattern("[^ @]*@[^ @]*")
        ]);
        this.password = new FormControl('', [
            ValidatePassword
        ]);
        this.signUpForm = new FormGroup({
            email: this.email,
            password: this.password,
        });
    }

    onSubmit() {
        if (this.signUpForm.valid) {
            console.log("Form Submitted!");
            this.signUpForm.reset();
        }
    }
}
