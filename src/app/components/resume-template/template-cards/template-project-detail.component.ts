import {Component, Input} from '@angular/core';
import {ProjectDetail} from '../../../models/project-detail';

@Component({
  selector: 'app-template-project-detail',
  template: `
    <h3>{{projectDetail.title}} <span style="text-transform: none; font-size: 13pt">as a {{projectDetail.role}}</span>
      <span style="color: #5da4d9; font-weight: 100"> - {{projectDetail.duration}}</span></h3>
    <p style="margin-top: 4%;" class="container">{{projectDetail.description}}</p>
  `,
  styles: [`
    h3, span {
      text-transform: capitalize;
      color: #767270;
      margin-top: 5%;
    }
  `]
})

export class TemplateProjectDetailComponent{
  @Input() projectDetail: ProjectDetail;

  constructor() {
  }
}
