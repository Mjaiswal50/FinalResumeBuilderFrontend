import {Component} from '@angular/core';

@Component({
  selector: 'app-setting',
  template: `
    <div style="margin-top: 2rem" fxLayout="column" fxLayoutGap="30px" fxLayoutAlign="start stretch">
      <div fxLayoutAlign="center center" style="width: 100vw">
        <h1>Settings</h1>
      </div>
      <div class="res-setting-container"
           style="padding: 10rem;" fxLayout="column" fxLayoutGap="30px">
        <div class="profile-container  "
             fxLayout="row" fxLayout.xs="column" fxLayoutAlign="start stretch">
          <div fxFlex="35%">
            <h1>Profile</h1>
          </div>
          <div fxFlex="65%">
            <app-profile-settings></app-profile-settings>
          </div>
        </div>
        <div class="profile-container  "
             fxLayout="row" fxLayout.xs="column" fxLayoutAlign="start stretch">
          <div fxFlex="35%">
            <h1>Password</h1>
          </div>
          <div fxFlex="65%">
            <app-password></app-password>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    h1 {
      text-transform: uppercase;
      color: #538ec3;
      letter-spacing: 2px;
      font-size: 2rem;
    }

    .profile-container {
      border-bottom: 2px solid #80808017;
      width: 100%;
      padding-bottom: 60px;
    }
  `]
})

export class SettingComponent {

  constructor() {

  }
}
