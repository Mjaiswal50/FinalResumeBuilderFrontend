import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ApiService} from '../../../services/api-service';
import {Refrence} from '../../../models/refrence';
import {ResumeRepository} from '../../../repository/resume-repository';

interface DataType {
  reference: Refrence;
  resumeId: any;
}

@Component({
  selector: 'app-reference-form',
  template: `
    <form [formGroup]="this.form" (submit)="this.form.valid && addOrUpdate()">
      <div fxLayout="column" fxLayoutGap="10px">
        <mat-form-field>
          <input formControlName="name" matInput placeholder="Mention your Name"/>
          <mat-error>Name is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="relationship" matInput placeholder="Relationship"/>
          <mat-error>This Field is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="company" matInput placeholder="Company"/>
          <mat-error>Company Name is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="email" matInput type="email" placeholder="Email"/>
          <mat-error>A valid Email is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="phone" matInput placeholder="Mobile Number"/>
          <mat-error>Mobile Number is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="address" matInput placeholder="Address"/>
          <mat-error>Address is Required</mat-error>
        </mat-form-field>
        <div fxLayout="row" fxLayoutAlign="end" fxLayoutGap="20px">
          <button style="    width: 10%;" fxFlexAlign="end" mat-raised-button color="primary">
            <span *ngIf="this.data.reference">Update</span>
            <span *ngIf="!this.data.reference">Add</span>
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

export class ReferenceFormComponent implements OnInit {
  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<ReferenceFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DataType, private resumeRepo: ResumeRepository) {
  }

  ngOnInit() {
    const name = this.data.reference ? this.data.reference.name : null;
    const relationship = this.data.reference ? this.data.reference.relationship : null;
    const company = this.data.reference ? this.data.reference.company : null;
    const email = this.data.reference ? this.data.reference.email : null;
    const phone = this.data.reference ? this.data.reference.phone : null;
    const address = this.data.reference ? this.data.reference.address : null;
    this.form = new FormGroup({
      name: new FormControl(name, [Validators.required]),
      relationship: new FormControl(relationship, [Validators.required]),
      company: new FormControl(company, [Validators.required]),
      email: new FormControl(email, [Validators.required]),
      phone: new FormControl(phone, [Validators.required]),
      address: new FormControl(address, [Validators.required]),
    });
  }

  addOrUpdate() {
    if (this.data.reference) {
      this.update();
    } else {
      this.save();
    }
  }

  save() {
    const observer$ = this.resumeRepo.addReference(this.form.value, this.data.resumeId);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }

  update() {
    const observer$ = this.resumeRepo.updateReference(this.form.value, this.data.resumeId, this.data.reference._id);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }
}
