import {Component, Input} from '@angular/core';
import {Skill} from '../../models/skill';
import {MatDialog} from '@angular/material/dialog';
import {SkillFormComponent} from './resume-dialogues/skill-form.component';

@Component({
  selector: 'app-skills',
  template: `
    <div fxLayout="column" fxLayoutGap="30px">
      <app-skill-list [resumeId]="resumeId" [skillList]="skills"></app-skill-list>
      <button (click)="add()" mat-raised-button color="primary">Add</button>
    </div>
  `,
  styles: [``]
})

export class SkillsComponent {
  @Input() skills: Skill[];
  @Input() resumeId: string;

  constructor(private dialog: MatDialog) {
  }
  add() {
    const dialogRef = this.dialog.open(SkillFormComponent, {
      disableClose: true,
      data: {resumeId: this.resumeId}
    });
    dialogRef.updateSize('90%', '90%');
  }
}
