import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthRepository} from '../repository/auth-repository';
import {takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-password',
  template: `
    <form [formGroup]="form" (ngSubmit)="form.valid && updatePassword()">
      <div fxLayout="column" fxLayoutAlign="start stretch">
        <div fxLayout="row" fxLayoutAlign="space-around center" fxLayoutGap="30px">
          <label class="setting-label">Old Password:</label>
          <mat-form-field class="settings-input">
            <input formControlName="old_password" matInput
                   placeholder="Enter old password"/>
            <mat-error>This field is required</mat-error>
          </mat-form-field>
        </div>
        <div fxLayout="row" fxLayoutAlign="space-around center" fxLayoutGap="30px">
          <label class="setting-label">New Password:</label>
          <mat-form-field class="settings-input">
            <input formControlName="new_password" matInput
                   placeholder="Enter New password"/>
            <mat-error>This field is required</mat-error>
          </mat-form-field>
        </div>
        <div fxLayout="row" fxLayoutAlign="space-around center" fxLayoutGap="30px">
          <label class="setting-label">Confirm Password:</label>
          <mat-form-field class="settings-input">
            <input formControlName="confirm_password" matInput
                   placeholder="Enter Confirm password"/>
            <mat-error>This field is required</mat-error>
          </mat-form-field>
        </div>
        <div fxLayoutAlign="end center">
          <button mat-raised-button color="primary">
            Update Password
          </button>
        </div>
      </div>
    </form>
  `,
  styles: [`
  `]
})

export class PasswordComponent implements OnInit, OnDestroy {
  form: FormGroup;
  isAlive = true;

  constructor(private authRepo: AuthRepository) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      old_password: new FormControl(null, [Validators.required]),
      new_password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirm_password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  updatePassword() {
    this.authRepo.updatePassword(this.form.value)
      .pipe(takeWhile(() => this.isAlive)).subscribe(data => {

    });
  }
}
