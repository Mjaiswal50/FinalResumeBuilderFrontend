import {Component, Input} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Objective} from '../../models/objective';
import {ObjectiveFormComponent} from './resume-dialogues/objective-form.component';

@Component({
  selector: 'app-objective',
  template: `
    <div fxLayout="column" fxLayoutGap="30px">
      <app-objective-list [resumeId]="resumeId" [objectives]="this.objectives"></app-objective-list>
      <button (click)="add()" mat-raised-button color="primary">Add</button>
    </div>
  `,
  styles: [``]
})

export class ObjectiveComponent {
  @Input() resumeId: string;
  @Input() objectives: Objective[];

  constructor(private dialog: MatDialog) {
  }

  add() {
    const dialogRef = this.dialog.open(ObjectiveFormComponent, {
      disableClose: true,
      data: {resumeId: this.resumeId}
    });
    dialogRef.updateSize('90%', '90%');
  }
}
