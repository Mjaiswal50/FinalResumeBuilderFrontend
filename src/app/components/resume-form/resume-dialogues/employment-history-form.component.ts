import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ApiService} from '../../../services/api-service';
import {EmploymentHistory} from '../../../models/employment-history';
import {ResumeRepository} from '../../../repository/resume-repository';

interface DataType {
  resumeId: string;
  employmentHistory: EmploymentHistory;
}

@Component({
  selector: 'app-employment-history-form',
  template: `
    <form [formGroup]="this.form" (submit)="this.form.valid && addOrUpdate()">
      <div fxLayout="column" fxLayoutGap="10px">
        <mat-form-field>
          <input formControlName="designation" matInput placeholder="Designation"/>
          <mat-error>Designation is Required</mat-error>
          <mat-hint>Example @ Web Developer</mat-hint>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="organisation" matInput placeholder="Organisation"/>
          <mat-error>Organisation is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="city" matInput placeholder="City"/>
          <mat-error>City is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="state" matInput placeholder="State"/>
          <mat-error>State is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <textarea formControlName="employer" matInput placeholder="Explain About Your Work"></textarea>
          <mat-error>This Field is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <mat-label>Starting Month</mat-label>
          <mat-select formControlName="start_month">
            <mat-option *ngFor="let month of this.monthArray" [value]="month">
              {{month}}
            </mat-option>
          </mat-select>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="start_year" matInput placeholder="Starting Year"/>
          <mat-error>Starting Year is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <mat-label>End Month (Don't fill if still working)</mat-label>
          <mat-select formControlName="end_month">
            <mat-option *ngFor="let month of this.monthArray" [value]="month">
              {{month}}
            </mat-option>
          </mat-select>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="end_year" matInput placeholder="End year(Don't fill if still Working)"/>
        </mat-form-field>
        <div fxLayout="row" fxLayoutAlign="end" fxLayoutGap="20px">
          <button style="    width: 10%;" fxFlexAlign="end" mat-raised-button color="primary">
            <span *ngIf="this.data.employmentHistory">Update</span>
            <span *ngIf="!this.data.employmentHistory">Add</span>
          </button>
          <button (click)="cancel()" type="button" style="    width: 10%;" fxFlexAlign="end" mat-raised-button color="accent">Cancel
          </button>
        </div>
      </div>
    </form>
  `,
  styles: [``]
})

export class EmploymentHistoryFormComponent implements OnInit {
  form: FormGroup;
  monthArray = ['January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August', 'September', 'November', 'December'];

  constructor(public dialogRef: MatDialogRef<EmploymentHistoryFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DataType, private resumeRepo: ResumeRepository) {
  }

  ngOnInit() {
    const employer = this.data.employmentHistory ? this.data.employmentHistory.employer : null;
    const designation = this.data.employmentHistory ? this.data.employmentHistory.designation : null;
    const organisation = this.data.employmentHistory ? this.data.employmentHistory.organisation : null;
    const city = this.data.employmentHistory ? this.data.employmentHistory.city : null;
    const state = this.data.employmentHistory ? this.data.employmentHistory.state : null;
    const startMonth = this.data.employmentHistory ? this.data.employmentHistory.start_month : null;
    const startYear = this.data.employmentHistory ? this.data.employmentHistory.start_year : null;
    const endMonth = this.data.employmentHistory ? this.data.employmentHistory.end_month : null;
    const endYear = this.data.employmentHistory ? this.data.employmentHistory.end_year : null;
    this.form = new FormGroup({
      employer: new FormControl(employer, [Validators.required]),
      designation: new FormControl(designation, [Validators.required]),
      organisation: new FormControl(organisation, [Validators.required]),
      city: new FormControl(city, [Validators.required]),
      state: new FormControl(state, [Validators.required]),
      start_month: new FormControl(startMonth, [Validators.required]),
      start_year: new FormControl(startYear, [Validators.required]),
      end_month: new FormControl(endMonth),
      end_year: new FormControl(endYear),
    });
  }

  addOrUpdate() {
    if (this.data.employmentHistory) {
      this.update();
    } else {
      this.save();
    }
  }

  save() {
    const observer$ = this.resumeRepo.addEmploymentHistory(this.form.value, this.data.resumeId);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }

  update() {
    const observer$ = this.resumeRepo.updateEmploymentHistory(this.form.value, this.data.employmentHistory._id, this.data.resumeId);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }

  cancel() {
    this.dialogRef.close();
  }
}
