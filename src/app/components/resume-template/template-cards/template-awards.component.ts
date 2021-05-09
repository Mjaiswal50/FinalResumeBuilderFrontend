import {Component, Input} from '@angular/core';
import {AwardsAchivement} from '../../../models/awards-achivement';

@Component({
  selector: 'app-template-awards',
  template: `
    <ul>
      <li>
        <div fxLayout="row" fxLayoutGap="10px">
          <span class="hack">{{award.awards_and_achivements}}</span>
        </div>
      </li>
    </ul>
  `,
  styles: [`
    ul {
      color: #767270;
      font-weight: bold;
      font-size: 16px;
    }

    ul li {
      vertical-align: top;
      margin-bottom: 5px;
    }
  `]
})

export class TemplateAwardsComponent {
  @Input() award: AwardsAchivement;

  constructor() {
  }
}
