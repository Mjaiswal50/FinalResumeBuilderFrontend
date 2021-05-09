import {Component, Input} from '@angular/core';
import {Education} from '../../models/education';
import {MatDialog} from '@angular/material/dialog';
import {EducationFormComponent} from './resume-dialogues/education-form.component';

@Component({
  selector: 'app-education',
  template: `
    <div fxLayout="column" fxLayoutGap="30px">
      <app-education-list [resumeId]="resumeId" [educationList]="educations"></app-education-list>
      <button (click)="add()" mat-raised-button color="primary">Add</button>
    </div>
  `,
  styles: [``]
})

export class EducationComponent {
  @Input() resumeId: string;
  @Input() educations: Education[];

  constructor(private matDialog: MatDialog) {
  }

  add() {
    this.matDialog.open(EducationFormComponent, {
      width: '90%', height: '90%', data: {resumeId: this.resumeId}
    });
  }
}
