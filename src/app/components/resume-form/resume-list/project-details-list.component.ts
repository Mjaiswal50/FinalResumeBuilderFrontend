import {Component, Input} from '@angular/core';
import {ProjectDetail} from '../../../models/project-detail';

@Component({
  selector: 'app-project-details-list',
  template: `
    <app-project-details-card [resumeId]="resumeId" *ngFor="let data of this.projectDetailList"
                              [projectDetail]="data"></app-project-details-card>
  `,
  styles: [``]
})

export class ProjectDetailsListComponent {
  @Input() projectDetailList: ProjectDetail[];
  @Input() resumeId: string;

  constructor() {
  }
}
