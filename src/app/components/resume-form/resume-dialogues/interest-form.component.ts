import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ApiService} from '../../../services/api-service';
import {Interest} from '../../../models/interest';
import {ResumeRepository} from '../../../repository/resume-repository';

interface DataType {
  interest: Interest;
  resumeId: any;
}

@Component({
  selector: 'app-interest-form',
  template: `
    <form [formGroup]="this.form" (submit)="this.form.valid && addOrUpdate()">
      <div fxLayout="column" fxLayoutGap="10px">
        <mat-form-field>
          <textarea formControlName="interest" matInput placeholder="Interest"></textarea>
          <mat-error>Interest is Required</mat-error>
        </mat-form-field>
        <div fxLayout="row" fxLayoutAlign="end" fxLayoutGap="20px">
          <button style="    width: 10%;" fxFlexAlign="end" mat-raised-button color="primary">
            <span *ngIf="this.data.interest">Update</span>
            <span *ngIf="!this.data.interest">Add</span>
          </button>
          <button (click)="cancel()" type="button" style="    width: 10%;" fxFlexAlign="end" mat-raised-button color="accent">Cancel
          </button>
        </div>
      </div>
    </form>
  `,
  styles: [``]
})

export class InterestFormComponent implements OnInit {
  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<InterestFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DataType, private resumeRepo: ResumeRepository) {
  }

  ngOnInit() {
    const interest = this.data.interest ? this.data.interest.interest : null;
    this.form = new FormGroup({
      interest: new FormControl(interest, [Validators.required])
    });
  }

  addOrUpdate() {
    if (this.data.interest) {
      this.update();
    } else {
      this.save();
    }
  }

  cancel() {
    this.dialogRef.close();
  }

  update() {
    const observer$ = this.resumeRepo.updateInterest(this.form.value, this.data.resumeId, this.data.interest._id);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }

  save() {
    const observer$ = this.resumeRepo.addInterest(this.form.value, this.data.resumeId);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }
}
