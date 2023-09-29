import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { FormGroup, NgForm } from '@angular/forms';
import { AuthResponse, AuthService } from '../auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  @ViewChild('openLoginModal') openRecipeModal: MatButton | undefined;
  @ViewChild('closeButton') closeButton: ElementRef | undefined;
  // form: FormGroup;
  constructor(
    private sharedService: SharedService,
    private router: Router,
    private authService: AuthService
  ) {}

  loginMode: boolean = true;
  isLoading = false;
  errorMessage: string = '';
  successMessage: string = '';

  onSubmit = (form: NgForm) => {
    this.isLoading = true;
    let authObservable = new Observable<AuthResponse>();
    if (!this.loginMode) {
      authObservable = this.authService.signUp(
        form.value.email,
        form.value.password
      );
    } else {
      authObservable = this.authService.signIn(
        form.value.email,
        form.value.password
      );
    }

    authObservable.subscribe(
      (response) => {
        if (response.registered) {
          this.successMessage = 'login successful!';
        }
        this.router.navigate(['/shipping']);
        this.closeButton?.nativeElement.click();
        //this.form.reset();
      },
      (errorRes) => {
        //console.log(errorRes);

        switch (errorRes.error.error.message) {
          case 'INVALID_EMAIL':
            this.errorMessage = 'Invalid email, please enter a correct one!';
            break;
          case 'EMAIL_EXISTS':
            this.errorMessage =
              'This email is already in use, please use a different one.';
            break;
          default:
            this.errorMessage = 'An error occurred. Please try again later.';
            break;
        }
      }
    );

    setTimeout(() => {
      this.errorMessage = '';
      this.successMessage = '';
    }, 5000);

    form.reset();
  };

  onSwitchMode = () => {
    this.loginMode = !this.loginMode;
  };

  ngOnInit() {
    this.sharedService.buyNow.subscribe((data) => {
      if (data) {
        this.openRecipeModal?._elementRef.nativeElement.click();
      }
    });
  }
}
