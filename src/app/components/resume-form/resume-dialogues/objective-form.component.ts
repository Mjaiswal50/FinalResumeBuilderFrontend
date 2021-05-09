import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ApiService} from '../../../services/api-service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Objective} from '../../../models/objective';
import {ResumeRepository} from '../../../repository/resume-repository';

interface DataType {
  objective: Objective;
  resumeId: any;
}

@Component({
  selector: 'app-objective-form',
  template: `
    <form [formGroup]="this.form" (ngSubmit)="this.form.valid && addOrUpdate()">
      <div fxLayout="column" fxLayoutGap="10px">
        <mat-form-field>
          <input formControlName="objective" matInput placeholder="Your Objective"/>
          <mat-error>This Field is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="date" matInput type="number" placeholder="Date"/>
          <mat-error>Date is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="place" matInput placeholder="Place"/>
          <mat-error>Place is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="declaration" matInput placeholder="Declaration"/>
          <mat-error>Declaration is Required</mat-error>
        </mat-form-field>
        <div fxLayout="row" fxLayoutAlign="end" fxLayoutGap="20px">
          <button style="    width: 10%;" fxFlexAlign="end" mat-raised-button color="primary">
            <span *ngIf="this.data.objective">Update</span>
            <span *ngIf="!this.data.objective">Add</span>
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

export class ObjectiveFormComponent implements OnInit {
  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<ObjectiveFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DataType, private resumeRepo: ResumeRepository) {
  }

  ngOnInit() {
    const objective = this.data.objective ? this.data.objective.objective : null;
    const date = this.data.objective ? this.data.objective.date : null;
    const place = this.data.objective ? this.data.objective.place : null;
    const declaration = this.data.objective ? this.data.objective.declaration : null;
    this.form = new FormGroup({
      objective: new FormControl(objective, [Validators.required]),
      date: new FormControl(date, [Validators.required]),
      place: new FormControl(place, [Validators.required]),
      declaration: new FormControl(declaration, [Validators.required]),
    });
  }

  addOrUpdate() {
    if (this.data.objective) {
      this.update();
    } else {
      this.save();
    }
  }

  save() {
    const observer$ = this.resumeRepo.addObjective(this.form.value, this.data.resumeId);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }

  update() {
    const observer$ = this.resumeRepo.updateObjective(this.form.value, this.data.resumeId, this.data.objective._id);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }
}
