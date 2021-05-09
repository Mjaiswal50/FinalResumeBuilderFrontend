import {Component, Inject, OnInit} from '@angular/core';
import {Education} from '../../../models/education';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../../services/api-service';
import {ResumeRepository} from '../../../repository/resume-repository';


export interface DataType {
  resumeId: string;
  education: Education;
}

@Component({
  selector: 'app-education-form',
  template: `
    <form [formGroup]="this.educationForm" (ngSubmit)="this.educationForm.valid && addOrUpdate()">
      <div fxLayout="column" fxLayoutGap="10px">
        <mat-form-field>
          <input formControlName="school_name" matInput placeholder="School Name or College Name"/>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="city" matInput placeholder="City"/>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="state" matInput placeholder="State"/>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="field" matInput placeholder="Field"/>
          <mat-hint>
            Example @ B.Tech in Computer Science
          </mat-hint>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="percentage" matInput placeholder="Percentage"/>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="degree_type" matInput placeholder="Degree Type"/>
          <mat-hint>
            Example @ Diploma,Graduation
          </mat-hint>
        </mat-form-field>
        <mat-form-field>
          <mat-label>Graduation Month</mat-label>
          <mat-select formControlName="graduation_month">
            <mat-option *ngFor="let month of this.monthArray" [value]="month">
              {{month}}
            </mat-option>
          </mat-select>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="graduation_year" matInput placeholder="Graduation Year"/>
        </mat-form-field>
      </div>
      <div fxLayout="row" fxLayoutAlign="end" fxLayoutGap="20px">
        <button mat-raised-button color="primary" *ngIf="this.data.education">Update</button>
        <button mat-raised-button color="primary" *ngIf="!this.data.education">Save</button>
        <button type="button" (click)="this.dialogRef.close()" mat-raised-button color="warn">Cancel</button>
      </div>
    </form>
  `,
  styles: [``]
})

export class EducationFormComponent implements OnInit {
  educationForm: FormGroup;
  monthArray = ['January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August', 'September', 'November', 'December'];

  constructor(public dialogRef: MatDialogRef<EducationFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DataType, private resumeRepo: ResumeRepository) {
  }

  ngOnInit() {
    const schoolName = this.data.education ? this.data.education.school_name : null;
    const city = this.data.education ? this.data.education.city : null;
    const state = this.data.education ? this.data.education.state : null;
    const field = this.data.education ? this.data.education.field : null;
    const degreeType = this.data.education ? this.data.education.degree_type : null;
    const graduationMonth = this.data.education ? this.data.education.graduation_month : null;
    const graduationYear = this.data.education ? this.data.education.graduation_year : null;
    const percentage = this.data.education ? this.data.education.percentage : null;
    this.educationForm = new FormGroup({
      school_name: new FormControl(schoolName, [Validators.required]),
      city: new FormControl(city, [Validators.required]),
      state: new FormControl(state, [Validators.required]),
      field: new FormControl(field, [Validators.required]),
      degree_type: new FormControl(degreeType, [Validators.required]),
      graduation_month: new FormControl(graduationMonth, [Validators.required]),
      graduation_year: new FormControl(graduationYear, [Validators.required]),
      percentage: new FormControl(percentage, [Validators.required]),
    });
  }

  addOrUpdate() {
    if (this.data.education) {
      this.update();
    } else {
      this.save();
    }
  }

  save() {
    const observer$ = this.resumeRepo.addEducation(this.educationForm.value, this.data.resumeId);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }

  update() {
    const observer$ = this.resumeRepo.updateEducation(this.educationForm.value, this.data.education._id, this.data.resumeId);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }
}
