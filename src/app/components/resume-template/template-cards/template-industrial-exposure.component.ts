import {Component, Input} from '@angular/core';
import {IndustrialExposure} from '../../../models/industrial-exposure';

@Component({
  selector: 'app-template-industrial-exposure',
  template: `
    <h3>{{industrialExposure.organisation}}</h3>
    <span style="color: #5da4d9;float: right; margin-top: -5%;" *ngIf="industrialExposure.end_month">
                      {{industrialExposure.start_month}} {{industrialExposure.start_year}} -
      {{industrialExposure.end_month}} {{industrialExposure.end_year}}
                    </span>
    <span style="color: #5da4d9;float: right; margin-top: -5%;" *ngIf="!industrialExposure.end_month">
                      {{industrialExposure.start_month}} {{industrialExposure.start_year}} - Present
                    </span>
    <h4>
      {{industrialExposure.city}}, {{industrialExposure.state}}
    </h4>
    <p style="margin-top: 4%;" class="container">{{industrialExposure.work}}</p>
  `,
  styles: [`
    h3, span {
      text-transform: uppercase;
      color: #767270;
      margin-top: 5%;
    }

    h4, p {
      color: #767270;
    }

    h4{
      text-transform: capitalize;
    }
  `]
})

export class TemplateIndustrialExposureComponent{
  @Input() industrialExposure: IndustrialExposure;

  constructor() {
  }
}
