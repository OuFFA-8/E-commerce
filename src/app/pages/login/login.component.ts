import { jwtDecode, JwtDecodeOptions } from './../../../../node_modules/jwt-decode/build/esm/index.d';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '../../core/services/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private readonly authService = inject(AuthService)
  private readonly router = inject(Router)

  isLoading: boolean = false;
  msgError: string = "";
  isSuccess: string = "";
  

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^\w{6,}$/)]),
  }
  );

  submitForm(): void {
    this.isLoading = true;
    if (this.loginForm.valid) {
      this.authService.sendLoginForm(this.loginForm.value).subscribe({
        next: (res) => {
          console.log(res);
          if (res.message === 'success') {
            localStorage.setItem('token', res.token);
            
            this.authService.saveUserData();
            this.isSuccess = res.message;
            
            this.router.navigate(["/home"]);
            this.isLoading = false;
          }
          
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
          this.msgError = err.error.message;
          this.isLoading = false;
        }
      });
    }
  }

  
}
