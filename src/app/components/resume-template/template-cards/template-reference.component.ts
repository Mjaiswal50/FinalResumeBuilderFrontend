import {Component, Input} from '@angular/core';
import {Refrence} from '../../../models/refrence';

@Component({
  selector: 'app-template-reference',
  template: `
    <h3 class="container">
      {{reference.name}} <span style="text-transform: lowercase; font-size: 10pt;">@{{reference.company}}</span><br>
      {{reference.relationship}}<br>
      <span style="text-transform: lowercase">{{reference.email}}</span><br>
      {{reference.phone}}<br>
      {{reference.address}}
    </h3>
  `,
  styles: [`
    h3, span {
      text-transform: capitalize;
      color: #767270;
      margin-top: 5%;
    }
  `]
})

export class TemplateReferenceComponent {
  @Input() reference: Refrence;
  constructor() {
  }
}
