import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Contact} from '../../../models/resume';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../../services/api-service';
import {ResumeRepository} from '../../../repository/resume-repository';

interface DataType {
  contactDetails: Contact;
  resumeId: string;
}

@Component({
  selector: 'app-contact-detail',
  template: `
    <form [formGroup]="contactDetailForm" (ngSubmit)="contactDetailForm.valid && addOrUpdate()">
      <div fxLayout="column">
        <mat-form-field>
          <input formControlName="first_name" matInput placeholder="First Name*"/>
          <mat-error>First name is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="last_name" matInput placeholder="Last Name"/>
          <mat-error>Last name is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="phone_number" matInput placeholder="Mobile Number"/>
          <mat-error>Mobile no is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="email" matInput placeholder="Email"/>
          <mat-error>Email is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="linkedin_url" matInput placeholder="LinkedIn Url (Optional)"/>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="website_url" matInput placeholder="Website Url (Optional)"/>
        </mat-form-field>
        <mat-form-field>
          <textarea formControlName="address" matInput placeholder="Address" rows="5"></textarea>
          <mat-error>Address is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="city" matInput placeholder="City"/>
          <mat-error>City</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="state" matInput placeholder="State"/>
          <mat-error>State is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="zip_code" matInput placeholder="Zip Code"/>
          <mat-error>Zip code is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input formControlName="country" matInput placeholder="Country"/>
          <mat-error>Country is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <textarea formControlName="summary" rows="5" matInput placeholder="Few Lines About Yourself">
          </textarea>
          <mat-error>Summary is Required</mat-error>
        </mat-form-field>
        <div fxLayout="row" fxLayoutAlign="end" fxLayoutGap="20px">
          <button mat-raised-button color="primary" *ngIf="this.data.contactDetails">Update</button>
          <button mat-raised-button color="primary" *ngIf="!this.data.contactDetails">Save</button>
          <button type="button" (click)="this.dialogRef.close()" mat-raised-button color="warn">Cancel</button>
        </div>
      </div>
    </form>
  `,
  styles: [``]
})


export class ContactDetailFormComponent implements OnInit {
  contactDetailForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<ContactDetailFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DataType, private resumeRepo: ResumeRepository) {
  }

  ngOnInit() {
    const firstName = this.data.contactDetails ? this.data.contactDetails.first_name : null;
    const lastName = this.data.contactDetails ? this.data.contactDetails.last_name : null;
    const phoneNumber = this.data.contactDetails ? this.data.contactDetails.phone_number : null;
    const email = this.data.contactDetails ? this.data.contactDetails.email : null;
    const address = this.data.contactDetails ? this.data.contactDetails.address : null;
    const city = this.data.contactDetails ? this.data.contactDetails.city : null;
    const state = this.data.contactDetails ? this.data.contactDetails.state : null;
    const zipCode = this.data.contactDetails ? this.data.contactDetails.zip_code : null;
    const country = this.data.contactDetails ? this.data.contactDetails.country : null;
    const summary = this.data.contactDetails ? this.data.contactDetails.summary : null;
    const linkedInUrl = this.data.contactDetails ? this.data.contactDetails.linkedin_url : null;
    const websiteUrl = this.data.contactDetails ? this.data.contactDetails.website_url : null;

    this.contactDetailForm = new FormGroup({
      first_name: new FormControl(firstName, [Validators.required]),
      last_name: new FormControl(lastName, [Validators.required]),
      phone_number: new FormControl(phoneNumber, [Validators.required]),
      email: new FormControl(email, [Validators.required]),
      address: new FormControl(address, [Validators.required]),
      city: new FormControl(city, [Validators.required]),
      state: new FormControl(state, [Validators.required]),
      zip_code: new FormControl(zipCode, [Validators.required]),
      country: new FormControl(country, [Validators.required]),
      summary: new FormControl(summary, [Validators.required]),
      linkedin_url: new FormControl(linkedInUrl),
      website_url: new FormControl(websiteUrl),
    });
  }

  addOrUpdate() {
    if (this.data.contactDetails) {
      this.update();
    } else {
      this.save();
    }
  }

  save() {
    const observer$ = this.resumeRepo.addContactDetails(this.contactDetailForm.value, this.data.resumeId);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }

  update() {
    const observer$ = this.resumeRepo.updateContactDetails(this.contactDetailForm.value, this.data.contactDetails._id, this.data.resumeId);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }
}
