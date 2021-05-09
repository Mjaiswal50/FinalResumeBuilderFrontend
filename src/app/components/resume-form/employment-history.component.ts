import {Component, Input} from '@angular/core';
import {EmploymentHistory} from '../../models/employment-history';
import {MatDialog} from '@angular/material/dialog';
import {EmploymentHistoryFormComponent} from './resume-dialogues/employment-history-form.component';

@Component({
  selector: 'app-employment-history',
  template: `
    <div fxLayout="column" fxLayoutGap="30px">
      <app-employment-history-list [resumeId]="resumeId" [employmentHistoryList]="employmentHistories"></app-employment-history-list>
      <button (click)="add()" mat-raised-button color="primary">Add</button>
    </div>
  `,
  styles: [``]
})

export class EmploymentHistoryComponent {
  @Input() employmentHistories: EmploymentHistory[];
  @Input() resumeId: string;

  constructor(private dialog: MatDialog) {
  }

  add() {
    this.dialog.open(EmploymentHistoryFormComponent, {
      width: '90%', height: '90%', data: {resumeId: this.resumeId}
    });
  }
}
