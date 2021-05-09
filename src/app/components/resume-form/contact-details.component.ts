import {Component, Input} from '@angular/core';
import {Contact} from '../../models/resume';
import {MatDialog} from '@angular/material/dialog';
import {ContactDetailFormComponent} from './resume-dialogues/contact-detail-form.component';

@Component({
  selector: 'app-contact-details',
  template: `
    <div style="position: relative" fxLayout="column" fxLayoutAlign="center center">
      <div class="cards-outer-div" fxLayout="column" fxLayoutAlign="center center">
        <ng-container *ngIf="!this.contactDetails">
          <h3 class="empty-heading">No Contact Details Added Yet</h3>
        </ng-container>
        <ng-container *ngIf="this.contactDetails">
          <h3 class="resume-form-info-card-heading">{{this.contactDetails.first_name}}</h3>
          <h3 class="resume-form-info-card-heading">{{this.contactDetails.last_name}}</h3>
          <p class="resume-form-info-card-heading">{{this.contactDetails.address}}</p>
          <p class="resume-form-info-card-heading">{{this.contactDetails.city}}</p>
          <p class="resume-form-info-card-heading">{{this.contactDetails.country}}</p>
        </ng-container>
        <div fxLayoutAlign="center center">
          <div class="hover-container">
            <div class="hover">
              <button class="resume-form-mat-icon-button" (click)="openContactForm()" mat-icon-button>
                <mat-icon class="resume-form-mat-icon" *ngIf="!this.contactDetails">add</mat-icon>
                <mat-icon class="resume-form-mat-icon" *ngIf="this.contactDetails">create</mat-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`

    .empty-heading {
      padding: 25px;
      margin-top: 2%;
      text-align: center;
      font-weight: bold
    }
  `]
})

export class ContactDetailsComponent {
  @Input() contactDetails: Contact;
  @Input() resumeId: string;

  constructor(private matDialog: MatDialog) {
  }

  openContactForm() {
    this.matDialog.open(ContactDetailFormComponent, {
      width: '90%', height: '90%', data: {contactDetails: this.contactDetails, resumeId: this.resumeId}
    });
  }
}
