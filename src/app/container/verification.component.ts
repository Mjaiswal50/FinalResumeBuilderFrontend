import {Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';
import { AuthRepository } from '../repository/auth-repository';
import { AlertService } from '../services/alert-service';

@Component({
  selector: 'app-verification',
  template: `
    <div fxLayout="column" fxLayoutAlign="center center" class="overlay" style="  background: linear-gradient(to right bottom, rgb(125, 226, 97), rgb(66, 123, 181));
">
      <div fxLayout="column" fxLayoutAlign="center center">
        <mat-card fxLayout="column" fxLayoutAlign="center center" fxLayoutGap="50px" fxFlex="100%">
          <mat-icon inline>unsubscribe</mat-icon>
          <div fxLayout="column" fxLayoutAlign="center center">
            <h1>You haven't Verified your Email yet</h1>
            <p>Please verify your email which is sent to <strong>{{email}} </strong> before continuing</p>
          </div>
          <button (click)="sendMail()" mat-raised-button color="primary">
            Send Email For Verification
          </button>
        </mat-card>
      </div>    
      <hr>
      <form *ngIf="this.isMailSent" fxLayoutAlign="center center"
          fxLayout="row"
          class="overlay" [formGroup]="this.otpForm"
          (ngSubmit)="this.otpForm.valid && otpSubmit()">
          <mat-form-field>
        <input formControlName="OtpVerify" matInput >
        </mat-form-field>
        <button type="submit" color="accent" mat-button>Submit-Otp</button>
        </form>
    </div>
  `,
  styles: [`

    mat-icon {
      font-size: 6rem !important;
      color: #16cb99;
      margin-top: 2.5rem !important;
    }

    h1 {
      font-weight: bold;
      font-size: 1.8rem;
      text-align: center;
    }

    button {
      color: white !important;
    }

    p {
      text-align: center;
      width: 70%;
    }

    p, h1 {
      color: #3FC54B;
    }

    mat-card {
      max-width: 80% !important;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 20px 10px inset !important;
    }

  `]
})

export class VerificationComponent {
  email = '';
  isMailSent = false ;
  otpForm: FormGroup;
  constructor(private authRepo: AuthRepository,private router: Router,private activatedRoute: ActivatedRoute,private alertService: AlertService) {
   this.fetchEmail();
    this.otpForm = new FormGroup({
      OtpVerify: new FormControl(null, [Validators.required]),
    });
  }

  fetchEmail() {
    const email$ = this.activatedRoute.queryParams.pipe(map(data => data.email));
    email$.subscribe(data => {
      this.email = data;
    });
  }

  sendMail() {
    this.isMailSent = true;
    var data = { 
            mail: this.email
           }
    this.authRepo.setCodeForVerify(data).subscribe((res)=>{
      this.alertService.success(`OTP IS :: ${res.otp}`);
    }); 
  }
  
  otpSubmit() {
    this.authRepo.otpSubmit(this.otpForm.value).subscribe((data)=>{
      this.router.navigate['on-boarding'];
      location.reload();
    });
  
  }
//trick: here we make otp verification
}
 
