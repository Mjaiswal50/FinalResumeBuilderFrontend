import {Component, Input} from '@angular/core';
import {Interest} from '../../models/interest';
import {MatDialog} from '@angular/material/dialog';
import {InterestFormComponent} from './resume-dialogues/interest-form.component';

@Component({
  selector: 'app-interest',
  template: `
    <div fxLayout="column" fxLayoutGap="30px">
      <app-interest-list [resumeId]="resumeId" [interestList]="interests"></app-interest-list>
      <button (click)="add()" mat-raised-button color="primary">Add</button>
    </div>
  `,
  styles: [``]
})

export class InterestComponent {
  @Input() interests: Interest[];
  @Input() resumeId: string;

  constructor(private dialog: MatDialog) {
  }

  add() {
    const dialogRef = this.dialog.open(InterestFormComponent, {
      disableClose: true,
      data: {resumeId: this.resumeId}
    });
    dialogRef.updateSize('90%', '90%');
  }
}
