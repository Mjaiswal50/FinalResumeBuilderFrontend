import {Component, Input} from '@angular/core';
import {Strength} from '../../../models/strength';

@Component({
  selector: 'app-strength-list',
  template: `
    <app-strength-card [resumeId]="resumeId" *ngFor="let data of strengthList"
                       [strength]="data"></app-strength-card>
  `,

  styles: [``]
})

export class StrengthListComponent {
  @Input() strengthList: Strength[];
  @Input() resumeId: string;

  constructor() {
  }
}
