import {Component, Input} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {StrengthFormComponent} from './resume-dialogues/strength-form.component';
import {Strength} from '../../models/strength';

@Component({
  selector: 'app-strength',
  template: `
    <div fxLayout="column" fxLayoutGap="30px">
      <app-strength-list [resumeId]="resumeId" [strengthList]="strength"></app-strength-list>
      <button (click)="add()" mat-raised-button color="primary">Add</button>
    </div>
  `,
  styles: [``]
})

export class StrengthComponent {
  @Input() strength: Strength[];
  @Input() resumeId: string;

  constructor(private dialog: MatDialog) {
  }

  add() {
    const dialogRef = this.dialog.open(StrengthFormComponent, {
      disableClose: true,
      data: {resumeId: this.resumeId}
    });
    dialogRef.updateSize('90%', '90%');
  }
}
