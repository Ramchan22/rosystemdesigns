import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserManagementService } from '../service/usermanagement-service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [UserManagementService]
})
export class LoginComponent {

  shopName: string = 'RAM AQUA TECH';
  loginForm: FormGroup;

  constructor(
    private userManagementService: UserManagementService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {

    // Initialize the form group with form controls and validators
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const formValues = this.loginForm.value;
      console.log('Username:', formValues.userName);
      console.log('Password:', formValues.password);

      let model = {
        userName: formValues.userName,
        password: formValues.password
      }

      // this.userManagementService.login(model).subscribe((res: any) => {

      //   if (res && res.success) {
      //     this.router.navigate(['/dashboard']);
      //   } else {
      //     console.log('Login failed');
      //   }

      //   // if (res != null) {
      //   //   if (res.errorCode == 200) {
      //   //     this.router.navigate(['/dashboard']);
      //   //   } else {
      //   //     console.log(res.userDisplayMesg);
      //   //   }
      //   // } else {
      //   //   console.log('Something went wrong!');
      //   // }

      // })

      this.userManagementService.login(model).subscribe(
        (response: HttpResponse<any>) => {

          console.log('response:'+ response);
          // The API call was successful, extract the token from the headers
          const token = response.headers.get('Authorization');
          const userId = response.headers.get('userId');
          if (token && userId) {
            // Save the token to localStorage (or a service)
            localStorage.setItem('token', token);
            localStorage.setItem('userId', userId);

            // Navigate to the dashboard
            this.router.navigate(['/dashboard']);
          } else {
            console.error('No token found in the response');
          }

        },
        (error) => {
          // Handle error here
          console.error('An error occurred:', error);
          // You can display a message to the user or handle the error as needed
        }
      );

    } else {
      console.log('Form is invalid');
    }
  }


}

