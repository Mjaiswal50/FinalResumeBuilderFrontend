import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../services/api-service';
import {AlertService} from '../services/alert-service';
import {Router} from '@angular/router';
import {AuthRepository} from '../repository/auth-repository';

@Component({
  selector: 'app-signup',
  template: `
    <form (ngSubmit)="this.signupForm.valid && signup()"
          [formGroup]="signupForm" class="overlay" fxLayoutAlign="center center"
          fxLayout="column"
          fxLayoutGap="40px">
      <img width="20%" src="../assets/digiresume-green.png">
      <mat-card fxLayout="column">
        <h2>Signup Form</h2>
        <mat-form-field>
          <input formControlName="email" type="email" matInput placeholder="Email"/>
          <mat-error>Valid Email is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="password" type="password" matInput placeholder="Password"/>
          <mat-error> (8-12 Digit) Password is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="confirm_password" matInput placeholder="Confirm Password"/>
          <mat-error>Confirm Password is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="name" matInput placeholder="Your Name"/>
          <mat-error>Valid Name is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="job_category" matInput placeholder="Job category"/>
          <mat-error>Valid Job Category is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="experience_level" type="email" matInput placeholder="Your Experience Level"/>
          <mat-error>Valid Exp Level is Required</mat-error>
        </mat-form-field>
        <div style="margin-top: 2rem" fxLayout="row" fxLayoutGap="20px" fxLayoutAlign="end">
          <button (click)="login()" type="button" color="primary" mat-raised-button>Go To Login</button>
          <button type="submit" color="accent" mat-raised-button>Signup</button>
        </div>
        <mat-spinner *ngIf="this.loading" color="accent" diameter="40"></mat-spinner>
      </mat-card>
    </form>
  `,
  styles: [`
    .overlay {
      width: 100%;
      height: 100%;
    }

    mat-spinner {
      align-self: center;
      margin-top: 2rem;
    }

    button {
      color: white !important;
    }

    mat-card {
      height: 35rem;
      width: 35rem;
    }
  `]
})

export class SignupComponent {
  signupForm: FormGroup;
  loading = false;

  constructor(private authRepository: AuthRepository, private alterService: AlertService, private router: Router) {
    this.signupForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      confirm_password: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      job_category: new FormControl(null, [Validators.required]),
      experience_level: new FormControl(null, [Validators.required]),
    });
  }

  signup() {
    this.loading = true;
    this.authRepository.signup(this.signupForm.value).subscribe((data) => {
      this.loading = false;
      this.alterService.success('signup Successful');
      this.router.navigate(['']);
    }, (error) => {
      this.loading = false;
    });
  }

  login() {
    this.router.navigate(['']);
  }
}
