import {Component, Input} from '@angular/core';
import {Skill} from '../../../models/skill';

@Component({
  selector: 'app-template-skill-card',
  template: `
    <p class="template-description">{{this.skill.skill}}</p>
    <mat-progress-bar *ngIf="skill.level === 'advance'" mode="determinate" value="90"></mat-progress-bar>
    <mat-progress-bar *ngIf="skill.level === 'intermediate'" mode="determinate" value="70"></mat-progress-bar>
    <mat-progress-bar *ngIf="skill.level === 'basic'" mode="determinate" value="50"></mat-progress-bar>
  `,
  styles: [``]
})

export class TemplateSkillCardComponent {
  @Input() skill: Skill;

  constructor() {
  }
}
