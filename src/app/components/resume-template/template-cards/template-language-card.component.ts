import {Component, Input} from '@angular/core';
import {Language} from '../../../models/language';

@Component({
  selector: 'app-template-language-card',
  template: `
    <p class="template-description">{{this.language.name}}</p>
    <mat-progress-bar *ngIf="language.level === 'advance'" mode="determinate" value="90"></mat-progress-bar>
    <mat-progress-bar *ngIf="language.level === 'intermediate'" mode="determinate" value="70"></mat-progress-bar>
    <mat-progress-bar *ngIf="language.level === 'basic'" mode="determinate" value="50"></mat-progress-bar>
  `,
  styles: [``]
})

export class TemplateLanguageCardComponent {
  @Input() language: Language;

  constructor() {
  }
}
