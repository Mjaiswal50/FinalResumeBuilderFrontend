import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ApiService} from '../../../services/api-service';
import {ProjectDetail} from '../../../models/project-detail';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ResumeRepository} from '../../../repository/resume-repository';

interface DataType {
  projectDetail: ProjectDetail;
  resumeId: any;
}

@Component({
  selector: 'app-project-details-form',
  template: `
    <form [formGroup]="this.form" (ngSubmit)="this.form.valid && addOrUpdate()">
      <div fxLayout="column" fxLayoutGap="10px">
        <mat-form-field>
          <input formControlName="title" matInput placeholder="title"/>
          <mat-error>Title is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <textarea formControlName="description" matInput placeholder="Description"></textarea>
          <mat-error>Description is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="duration" matInput placeholder="duration"/>
          <mat-error>Duration is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="role" matInput placeholder="role"/>
          <mat-error>Role is Required</mat-error>
        </mat-form-field>
        <div fxLayout="row" fxLayoutAlign="end" fxLayoutGap="20px">
          <button style="    width: 10%;" fxFlexAlign="end" mat-raised-button color="primary">
            <span *ngIf="this.data.projectDetail">Update</span>
            <span *ngIf="!this.data.projectDetail">Add</span>
          </button>
          <button (click)="this.dialogRef.close()" type="button" style="    width: 10%;" fxFlexAlign="end" mat-raised-button color="accent">
            Cancel
          </button>
        </div>
      </div>
    </form>
  `,
  styles: [``]
})

export class ProjectDetailsFormComponent implements OnInit {
  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<ProjectDetailsFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DataType, private resumeRepo: ResumeRepository) {
  }

  ngOnInit() {
    const title = this.data.projectDetail ? this.data.projectDetail.title : null;
    const description = this.data.projectDetail ? this.data.projectDetail.description : null;
    const role = this.data.projectDetail ? this.data.projectDetail.role : null;
    const duration = this.data.projectDetail ? this.data.projectDetail.duration : null;
    this.form = new FormGroup({
      title: new FormControl(title, [Validators.required]),
      description: new FormControl(description, [Validators.required]),
      role: new FormControl(role, [Validators.required]),
      duration: new FormControl(duration, [Validators.required]),
    });
  }

  addOrUpdate() {
    if (this.data.projectDetail) {
      this.update();
    } else {
      this.save();
    }
  }

  save() {
    const observer$ = this.resumeRepo.addProjectDetail(this.form.value, this.data.resumeId);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }

  update() {
    const observer$ = this.resumeRepo.updateProjectDetail(this.form.value, this.data.resumeId, this.data.projectDetail._id);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }
}
