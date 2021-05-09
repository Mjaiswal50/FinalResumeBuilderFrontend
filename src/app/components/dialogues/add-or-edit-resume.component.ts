import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Resume} from '../../models/resume';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../../services/alert-service';
import {ResumeRepository} from '../../repository/resume-repository';
import {takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-add-or-edit-resume',
  template: `
    <form [formGroup]="form" (ngSubmit)="form.valid && addOrUpdate()">
      <div fxLayout="column" fxLayoutAlign="start stretch">
        <mat-form-field>
          <input formControlName="name" matInput placeholder="Enter Resume Name"/>
        </mat-form-field>
        <button mat-raised-button color="accent">{{this.data ? 'Update' : 'Add'}}</button>
      </div>
    </form>
  `,
  styles: [``]
})

export class AddOrEditResumeComponent implements OnInit, OnDestroy {
  form: FormGroup;
  isAlive = true;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Resume,
              private dialogRef: MatDialogRef<AddOrEditResumeComponent>, private alertService: AlertService,
              private resumeRepo: ResumeRepository) {
  }

  ngOnInit() {
    const name = this.data ? this.data.name : null;
    this.form = new FormGroup({
      name: new FormControl(name, [Validators.required])
    });
  }

  addOrUpdate() {
    if (this.data) {
      this.update();
    } else {
      this.add();
    }
  }

  add() {
    this.resumeRepo.saveResume(this.form.value).pipe(takeWhile(() => this.isAlive))
      .subscribe(data => {
        this.alertService.success('Resume Added Successfully');
        this.dialogRef.close();
      });
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  update() {
    this.resumeRepo.editResume(this.form.value, this.data._id).pipe(takeWhile(() => this.isAlive))
      .subscribe(() => {
        this.alertService.success('Resume Updated Successfully');
        this.dialogRef.close();
      });
  }
}
