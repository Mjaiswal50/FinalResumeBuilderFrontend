import {Component, Input} from '@angular/core';
import {EducationFormComponent} from './resume-dialogues/education-form.component';
import {AwardsAchivement} from '../../models/awards-achivement';
import {MatDialog} from '@angular/material/dialog';
import {AwardFormComponent} from './resume-dialogues/award-form.component';

@Component({
  selector: 'app-award',
  template: `
    <div fxLayout="column" fxLayoutGap="30px">
      <app-award-list [resumeId]="resumeId" [awardList]="awards"></app-award-list>
      <button (click)="add()" mat-raised-button color="primary">Add</button>
    </div>
  `,
  styles: [``]
})

export class AwardComponent {
  @Input() resumeId: string;
  @Input() awards: AwardsAchivement[];

  constructor(private matDialog: MatDialog) {
  }

  add() {
    this.matDialog.open(AwardFormComponent, {
      width: '90%', height: '90%', data: {resumeId: this.resumeId}
    });
  }
}
