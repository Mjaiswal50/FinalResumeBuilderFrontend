import {Component, Input} from '@angular/core';
import {Objective} from '../../../models/objective';

@Component({
  selector: 'app-template-objective',
  template: `
    <h3>
      {{objective.objective}}<br>
      {{objective.date}}<br>
      {{objective.place}}
    </h3>
    <p>{{objective.declaration}}</p>
  `,
  styles: [`
    h3, span {
      text-transform: capitalize;
      color: #767270;
      margin-top: 5%;
    }

    h4, p {
      color: #767270;
    }
  `]
})

export class TemplateObjectiveComponent {
  @Input() objective: Objective;

  constructor() {
  }
}
