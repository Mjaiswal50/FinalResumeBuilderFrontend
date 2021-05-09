import {Component, Input} from '@angular/core';
import {Weakness} from '../../models/weakness';
import {MatDialog} from '@angular/material/dialog';
import {WeaknessFormComponent} from './resume-dialogues/weakness-form.component';

@Component({
  selector: 'app-weakness',
  template: `
    <div fxLayout="column" fxLayoutGap="30px">
      <app-weakness-list [resumeId]="resumeId" [weaknessList]="weaknesses"></app-weakness-list>
      <button (click)="add()" mat-raised-button color="primary">Add</button>
    </div>
  `,
  styles: [``]
})

export class WeaknessComponent {
  @Input() weaknesses: Weakness[];
  @Input() resumeId: string;

  constructor(private dialog: MatDialog) {
  }

  add() {
    const dialogRef = this.dialog.open(WeaknessFormComponent, {
      disableClose: true,
      data: {resumeId: this.resumeId}
    });
    dialogRef.updateSize('90%', '90%');
  }
}
