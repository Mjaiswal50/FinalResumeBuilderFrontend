import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ApiService} from '../../../services/api-service';
import {AwardsAchivement} from '../../../models/awards-achivement';
import {ResumeRepository} from '../../../repository/resume-repository';

interface DataType {
  award: AwardsAchivement;
  resumeId: string;
}

@Component({
  selector: 'app-award-form',
  template: `
    <form [formGroup]="form" (ngSubmit)="form.valid && addOrUpdate()">
      <div fxLayout="column" fxLayoutGap="10px">
        <mat-form-field>
          <textarea formControlName="awards_and_achivements" rows="5" matInput
                    placeholder="Describe about your awards and achievement"></textarea>
          <mat-error>This Field is Required</mat-error>
        </mat-form-field>
        <div fxLayout="row" fxLayoutAlign="end" fxLayoutGap="20px">
          <button mat-raised-button color="primary" *ngIf="this.data.award">Update</button>
          <button mat-raised-button color="primary" *ngIf="!this.data.award">Save</button>
          <button type="button" (click)="this.dialogRef.close()" mat-raised-button color="warn">Cancel</button>
        </div>
      </div>
    </form>
  `,
  styles: [``]
})

export class AwardFormComponent implements OnInit {
  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<AwardFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DataType,
              private resumeRepo: ResumeRepository) {
  }

  ngOnInit() {
    const awardAchievement = this.data.award ? this.data.award.awards_and_achivements : null;
    this.form = new FormGroup({
      awards_and_achivements: new FormControl(awardAchievement, [Validators.required])
    });
  }

  addOrUpdate() {
    if (this.data.award) {
      this.update();
    } else {
      this.save();
    }
  }

  save() {
    const observer$ = this.resumeRepo.addAward(this.form.value, this.data.resumeId);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }

  update() {
    const observer$ = this.resumeRepo.updateAward(this.form.value, this.data.resumeId, this.data.award._id);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }

}
