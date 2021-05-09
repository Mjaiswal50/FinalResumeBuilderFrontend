import {Component, Input} from '@angular/core';
import {IndustrialExposure} from '../../models/industrial-exposure';
import {MatDialog} from '@angular/material/dialog';
import {IndustrialExposureFormComponent} from './resume-dialogues/industrial-exposure-form.component';

@Component({
  selector: 'app-industrial-exposure',
  template: `
    <div fxLayout="column" fxLayoutGap="30px">
      <app-industrial-exposure-list [resumeId]="resumeId" [industrialExposureList]="industrialExposures"></app-industrial-exposure-list>
      <button (click)="add()" mat-raised-button color="primary">Add</button>
    </div>
  `,
  styles: [``]
})

export class IndustrialExposureComponent {
  @Input() industrialExposures: IndustrialExposure[];
  @Input() resumeId: string;

  constructor(private dialog: MatDialog) {
  }

  add() {
    this.dialog.open(IndustrialExposureFormComponent, {
      width: '90%', height: '90%', data: {resumeId: this.resumeId}
    });
  }
}
