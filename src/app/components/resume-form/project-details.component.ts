import {Component, Input} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ProjectDetailsFormComponent} from './resume-dialogues/project-details-form.component';
import {ProjectDetail} from '../../models/project-detail';

@Component({
  selector: 'app-project-details',
  template: `
    <div fxLayout="column" fxLayoutGap="30px">
      <app-project-details-list [resumeId]="resumeId" [projectDetailList]="projectDetails"></app-project-details-list>
      <button (click)="add()" mat-raised-button color="primary">Add</button>
    </div>
  `,
  styles: [``]
})

export class ProjectDetailsComponent {
  @Input() resumeId: string;
  @Input() projectDetails: ProjectDetail[];

  constructor(private dialog: MatDialog) {
  }

  add() {
    const dialogRef = this.dialog.open(ProjectDetailsFormComponent, {
      disableClose: true,
      data: {resumeId: this.resumeId}
    });
    dialogRef.updateSize('90%', '90%');
  }
}
