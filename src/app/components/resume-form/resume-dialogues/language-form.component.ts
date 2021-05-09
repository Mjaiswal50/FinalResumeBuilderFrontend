import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ApiService} from '../../../services/api-service';
import {Language} from '../../../models/language';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ResumeRepository} from '../../../repository/resume-repository';

interface DataType {
  language: Language;
  resumeId: any;
}

@Component({
  selector: 'app-language-form',
  template: `
    <form [formGroup]="this.form" (submit)="this.form.valid && addOrUpdate()">
      <div fxLayout="column" fxLayoutGap="10px">
        <mat-form-field>
          <input formControlName="name" matInput placeholder="Name"/>
          <mat-error>Name is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <mat-label>Level</mat-label>
          <mat-select formControlName="level">
            <mat-option *ngFor="let level of this.levelArray" [value]="level">
              {{level}}
            </mat-option>
          </mat-select>
          <mat-error>Please provide A Valid Level</mat-error>
        </mat-form-field>
        <div fxLayout="row" fxLayoutAlign="end" fxLayoutGap="20px">
          <button style="    width: 10%;" fxFlexAlign="end" mat-raised-button color="primary">
            <span *ngIf="this.data.language">Update</span>
            <span *ngIf="!this.data.language">Add</span>
          </button>
          <button (click)="cancel()" type="button" style="    width: 10%;" fxFlexAlign="end" mat-raised-button color="accent">Cancel
          </button>
        </div>
      </div>
    </form>
  `,
  styles: [``]
})

export class LanguageFormComponent implements OnInit {
  form: FormGroup;
  levelArray = ['basic', 'intermediate', 'advance'];

  constructor(public dialogRef: MatDialogRef<LanguageFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DataType, private resumeRepo: ResumeRepository) {
  }

  ngOnInit() {
    const name = this.data.language ? this.data.language.name : null;
    const level = this.data.language ? this.data.language.level : null;
    this.form = new FormGroup({
      name: new FormControl(name, [Validators.required]),
      level: new FormControl(level, [Validators.required]),
    });
  }

  addOrUpdate() {
    if (this.data.language) {
      this.update();
    } else {
      this.save();
    }
  }

  cancel() {
    this.dialogRef.close();
  }

  update() {
    const observer$ = this.resumeRepo.updateLanguage(this.form.value, this.data.resumeId, this.data.language._id);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }

  save() {
    const observer$ = this.resumeRepo.addLanguage(this.form.value, this.data.resumeId);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }
}
