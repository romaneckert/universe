import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ValidatePassword } from "../../validators/password.validator";
import { HttpModule, Http } from '@angular/http';
import { environment } from "../../../environments/environment";

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html'
})
export class SignUpComponent implements OnInit {

    signUpForm: FormGroup;
    email: FormControl;
    password: FormControl;
    apiUrl: String;

    constructor(private http: Http) {
        this.apiUrl = environment.API_URL;
    }

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
        if (!this.signUpForm.valid) return false;

        this.signUpForm.disable();

        this.http.post(
            this.apiUrl + '/api/user/sign-up/',
            {
                email: this.email.value,
                password: this.password.value
            }
        ).subscribe(this.handleLoginResponse);
    }

    handleLoginResponse(res) {
        let result = res.json();

        if (result.errors) {
            console.error(result.errors);
        } else {
            this.signUpForm.reset();
        }
    }
}
