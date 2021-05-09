import {Component, Input} from '@angular/core';
import {Strength} from '../../../models/strength';

@Component({
  selector: 'app-template-strength-card',
  template: `
    <ul style="color: #fff;">
      <li>
        {{strength.name}}
      </li>
    </ul>
  `,
  styles: [`
    ul {
      color: #767270;
      font-weight: bold;
      font-size: 16px;
    }

  `]
})

export class TemplateStrengthCardComponent {
  @Input() strength: Strength;

  constructor() {
  }
}
