import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-template-buttons',
  template: `
    <div style="{{this.isLeftPanelEnabled ? 'margin-top: 2rem':''}}" fxLayout="row" fxLayoutAlign="center center" fxLayoutGap="30px">
      <button (click)="editResume()" mat-mini-fab matTooltip="edit resume">
        <mat-icon>assignment</mat-icon>
      </button>
      <button (click)="editProfile()" mat-mini-fab matTooltip="edit profile image or video">
        <mat-icon>videocam</mat-icon>
      </button>
      <button mat-mini-fab matTooltip="share resume">
        <mat-icon>share</mat-icon>
      </button>
    </div>
  `,
  styles: [`
    button {
      background: #f1c232 !important;
      color: black !important;
    }
  `]
})

export class TemplateButtonsComponent {
  @Input() resumeId: string;
  @Input() isLeftPanelEnabled;

  constructor(private router: Router) {
  }

  editResume() {
    this.router.navigate(['/dashboard/resume/edit/' + this.resumeId]);
  }

  editProfile() {
    this.router.navigate(['/dashboard/resume/edit/profile/' + this.resumeId]);
  }
}
