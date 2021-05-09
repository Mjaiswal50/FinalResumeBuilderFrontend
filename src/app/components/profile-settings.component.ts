import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthRepository} from '../repository/auth-repository';
import {takeWhile} from 'rxjs/operators';
import {User} from '../models/user';

@Component({
  selector: 'app-profile-settings',
  template: `
    <form [formGroup]="this.form" (ngSubmit)="this.form.valid && update()">
      <div fxLayoutGap="30px" fxLayout="column" fxLayoutAlign="start stretch">
        <div fxLayout="row" fxLayoutAlign="space-around center" fxLayoutGap="30px">
          <label class="setting-label">Name:</label>
          <mat-form-field class="settings-input">
            <input matInput formControlName="name"
                   placeholder="Name"/>
          </mat-form-field>
        </div>
        <div fxLayout="row" fxLayoutAlign="space-around center" fxLayoutGap="30px">
          <label class="setting-label">Email:</label>
          <mat-form-field class="settings-input">
            <input disabled [value]="this.user ? this.user.email : ''"
                   matInput placeholder="Email"/>
          </mat-form-field>
        </div>
        <div fxLayoutAlign="end center">
          <button mat-raised-button color="primary">
            Update Profile
          </button>
        </div>
      </div>
    </form>
  `,
  styles: [`
  `]
})

export class ProfileSettingsComponent implements OnDestroy, OnInit {
  form: FormGroup;
  isAlive = true;
  user: User;

  constructor(public authRepo: AuthRepository) {
  }

  ngOnInit() {
    this.initUser();
    const name = this.user ? this.user.name : null;
    this.form = new FormGroup({
      name: new FormControl(name, [Validators.required]),
    });
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  initUser() {
    this.authRepo.fetchMe().pipe(takeWhile(() => this.isAlive)).subscribe(user => {
      this.user = user;
    });
  }

  update() {
    this.authRepo.updateProfile(this.form.value).pipe(takeWhile(() => this.isAlive))
      .subscribe(data => {

      });
  }
}
