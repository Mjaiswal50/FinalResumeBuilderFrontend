import {Component, Input} from '@angular/core';
import {Education} from '../../../models/education';

@Component({
  selector: 'app-template-education',
  template: `
    <div fxLayout="column" style="margin-top: 2%;border-bottom: 1px solid #767270">
      <h3>{{this.education.degree_type}} @ <span>{{this.education.school_name}}</span></h3>
      <span>{{this.education.graduation_month}}</span>
      <span style="color: #5da4d9;" fxLayoutAlign="end">{{this.education.graduation_month}}
        {{this.education.graduation_year}}</span>
      <h4>
        {{education.city}}, {{education.state}} <br>
        {{education.field}} - {{education.percentage}}
      </h4>
    </div>
  `,
  styles: [`

    h3, h4, span {
      text-transform: uppercase;
      color: #767270;
    }
  `]
})

export class TemplateEducationComponent {
  @Input() education: Education;

  constructor() {
  }
}
