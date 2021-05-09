import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ApiService} from '../../../services/api-service';
import {Weakness} from '../../../models/weakness';
import {ResumeRepository} from '../../../repository/resume-repository';


interface DataType {
  weakness: Weakness;
  resumeId: any;
}

@Component({
  selector: 'app-weakness-form',
  template: `
    <form [formGroup]="this.form" (submit)="this.form.valid && addOrUpdate()">
      <div fxLayout="column" fxLayoutGap="10px">
        <mat-form-field>
          <input formControlName="name" matInput placeholder="Name your Weakness"/>
          <mat-error>This field is Required</mat-error>
        </mat-form-field>
        <div fxLayout="row" fxLayoutAlign="end" fxLayoutGap="20px">
          <button style="    width: 10%;" fxFlexAlign="end" mat-raised-button color="primary">
            <span *ngIf="this.data.weakness">Update</span>
            <span *ngIf="!this.data.weakness">Add</span>
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

export class WeaknessFormComponent implements OnInit {
  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<WeaknessFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DataType, private resumeRepo: ResumeRepository) {
  }

  ngOnInit() {
    const name = this.data.weakness ? this.data.weakness.name : null;
    this.form = new FormGroup({
      name: new FormControl(name, [Validators.required])
    });
  }

  addOrUpdate() {
    if (this.data.weakness) {
      this.update();
    } else {
      this.save();
    }
  }

  update() {
    const observer$ = this.resumeRepo.updateWeakness(this.form.value, this.data.resumeId, this.data.weakness._id);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }

  save() {
    const observer$ = this.resumeRepo.addWeakness(this.form.value, this.data.resumeId);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }
}
