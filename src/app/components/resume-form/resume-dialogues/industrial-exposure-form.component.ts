import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ApiService} from '../../../services/api-service';
import {IndustrialExposure} from '../../../models/industrial-exposure';
import {ResumeRepository} from '../../../repository/resume-repository';

interface DataType {
  industrialExposure: IndustrialExposure;
  resumeId: any;
}

@Component({
  selector: 'app-industrial-exposure-form',
  template: `
    <form [formGroup]="form" (submit)="this.form.valid && addOrUpdate()">
      <div fxLayout="column" fxLayoutGap="10px">
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
          <mat-label>Starting Month</mat-label>
          <mat-select formControlName="start_month">
            <mat-option *ngFor="let month of this.monthArray" [value]="month">
              {{month}}
            </mat-option>
          </mat-select>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="start_year" matInput type="number" placeholder="Starting Year"/>
          <mat-error>Starting Year is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <mat-label>End Month</mat-label>
          <mat-select formControlName="end_month">
            <mat-option *ngFor="let month of this.monthArray" [value]="month">
              {{month}}
            </mat-option>
          </mat-select>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="end_year" matInput type="number" placeholder="End Year (Leave this if you are Still Working)"/>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="work" matInput placeholder="Tell about your Work"/>
          <mat-error>This Field is Required</mat-error>
        </mat-form-field>
        <div fxLayout="row" fxLayoutAlign="end" fxLayoutGap="20px">
          <button style="    width: 10%;" fxFlexAlign="end" mat-raised-button color="primary">
            <span *ngIf="this.data.industrialExposure">Update</span>
            <span *ngIf="!this.data.industrialExposure">Add</span>
          </button>
          <button (click)="cancel()" type="button" style="    width: 10%;" fxFlexAlign="end" mat-raised-button color="accent">Cancel
          </button>
        </div>
      </div>
    </form>
  `,
  styles: [``]
})

export class IndustrialExposureFormComponent implements OnInit {
  form: FormGroup;
  monthArray = ['', 'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August', 'September', 'November', 'December'];

  constructor(public dialogRef: MatDialogRef<IndustrialExposureFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DataType, private resumeRepo: ResumeRepository) {
  }

  ngOnInit() {
    const organisation = this.data.industrialExposure ? this.data.industrialExposure.organisation : null;
    const city = this.data.industrialExposure ? this.data.industrialExposure.city : null;
    const state = this.data.industrialExposure ? this.data.industrialExposure.state : null;
    const startMonth = this.data.industrialExposure ? this.data.industrialExposure.start_month : null;
    const startYear = this.data.industrialExposure ? this.data.industrialExposure.start_year : null;
    const endMonth = this.data.industrialExposure ? this.data.industrialExposure.end_month : null;
    const endYear = this.data.industrialExposure ? this.data.industrialExposure.end_year : null;
    const work = this.data.industrialExposure ? this.data.industrialExposure.work : null;
    this.form = new FormGroup({
      organisation: new FormControl(organisation, [Validators.required]),
      city: new FormControl(city, [Validators.required]),
      state: new FormControl(state, [Validators.required]),
      start_month: new FormControl(startMonth, [Validators.required]),
      start_year: new FormControl(startYear, [Validators.required]),
      end_month: new FormControl(endMonth),
      end_year: new FormControl(endYear),
      work: new FormControl(work, [Validators.required]),
    });
  }

  addOrUpdate() {
    if (this.data.industrialExposure) {
      this.update();
    } else {
      this.save();
    }
  }

  cancel() {
    this.dialogRef.close();
  }

  update() {
    const observer$ = this.resumeRepo.updateIndustrialExposure(this.form.value, this.data.resumeId, this.data.industrialExposure._id);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }

  save() {
    const observer$ = this.resumeRepo.addIndustrialExposure(this.form.value, this.data.resumeId);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }

}
