import {Component, Input} from '@angular/core';
import {Interest} from '../../../models/interest';

@Component({
  selector: 'app-template-interest',
  template: `
    <ul style="list-style-type: square">
      <li>
        <div fxLayout="row" fxLayoutGap="10px">
          <span class="hack">{{interest.interest}}</span>
        </div>
      </li>
    </ul>
  `,
  styles: [`
    ul {
      color: #767270;
      font-weight: bold;
      font-size: 16px;
      word-break: break-word;
    }

    ul li {
      vertical-align: top;
      margin-bottom: 5px;
    }
  `]
})

export class TemplateInterestComponent {
  @Input() interest: Interest;

  constructor() {
  }
}
