import {Component, Input} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ReferenceFormComponent} from './resume-dialogues/reference-form.component';
import {Refrence} from '../../models/refrence';

@Component({
  selector: 'app-reference',
  template: `
    <div fxLayout="column" fxLayoutGap="30px">
      <app-reference-list [resumeId]="resumeId" [referenceList]="references"></app-reference-list>
      <button (click)="add()" mat-raised-button color="primary">Add</button>
    </div>
  `,
  styles: [``]
})

export class ReferenceComponent {

  @Input() resumeId: string;
  @Input() references: Refrence[];

  constructor(private dialog: MatDialog) {
  }

  add() {
    const dialogRef = this.dialog.open(ReferenceFormComponent, {
      disableClose: true,
      data: {resumeId: this.resumeId}
    });
    dialogRef.updateSize('90%', '90%');
  }
}
