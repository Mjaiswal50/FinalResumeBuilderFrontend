import {AfterContentInit, Component, Input} from '@angular/core';
import {Resume} from '../../models/resume';

@Component({
  selector: 'app-template-contact-detail',
  template: `
    <div fxLayout="column"
         fxLayoutAlign="center center">
      <button [ngStyle]="{'background-image':'url('+this.imageUrl+')'}"
              mat-fab class="profile-pic">

      </button>
      <h1>{{this.resume.contact_details.first_name}}
        {{this.resume.contact_details.last_name}}</h1>
      <app-template-buttons [resumeId]="resume._id"></app-template-buttons>
      <div fxLayout="row" fxLayoutGap="30px" class="container border-container">
        <mat-icon>account_circle</mat-icon>
        <p>{{this.resume.contact_details.summary}}</p>
      </div>
      <div fxLayout="row" fxLayoutGap="30px" class="container">
        <mat-icon>call</mat-icon>
        <p class="template-description">{{this.resume.contact_details.phone_number}}</p>
      </div>
      <div *ngIf="this.resume.contact_details.linkedin_url" fxLayout="row" fxLayoutGap="30px" class="container">
        <mat-icon>link</mat-icon>
        <p class="template-description">{{this.resume.contact_details.linkedin_url}}</p>
      </div>
      <div *ngIf="this.resume.contact_details.website_url" fxLayout="row" fxLayoutGap="30px" class="container">
        <mat-icon>link</mat-icon>
        <p class="template-description"> {{this.resume.contact_details.website_url}}</p>
      </div>
      <div fxLayout="row" fxLayoutGap="30px" class="container border-container">
        <mat-icon>email</mat-icon>
        <p class="template-description">{{this.resume.contact_details.email}}</p>
      </div>
      <div fxLayout="row" fxLayoutGap="30px" class="container border-container">
        <mat-icon>home</mat-icon>
        <p class="template-description">{{this.resume.contact_details.address}}</p>
      </div>
      <ng-container *ngTemplateOutlet="skillTemplate"></ng-container>
      <ng-container *ngTemplateOutlet="languageTemplate"></ng-container>
      <ng-container *ngTemplateOutlet="strengthTemplate"></ng-container>
      <ng-container *ngTemplateOutlet="weaknessTemplate"></ng-container>
    </div>

    <ng-template #skillTemplate>
      <div *ngIf="this.resume.skills.length" fxLayout="row" fxLayoutGap="30px" class="container border-container">
        <mat-icon>calendar_today</mat-icon>
        <div fxLayout="column">
          <h4>Professional skills</h4>
          <app-template-skill-card *ngFor="let skill of this.resume.skills"
                                   [skill]="skill"></app-template-skill-card>
        </div>
      </div>
    </ng-template>
    <ng-template #languageTemplate>
      <div *ngIf="this.resume.languages.length" fxLayout="row" fxLayoutGap="30px" class="container border-container">
        <mat-icon>calendar_today</mat-icon>
        <div fxLayout="column">
          <h4>Languages</h4>
          <app-template-language-card *ngFor="let language of this.resume.languages"
                                      [language]="language"></app-template-language-card>
        </div>
      </div>
    </ng-template>
    <ng-template #strengthTemplate>
      <div *ngIf="this.resume.strengths.length"
           fxLayout="row" fxLayoutGap="30px" class="container border-container">
        <mat-icon>favorite</mat-icon>
        <div fxLayout="column">
          <h4>Strength</h4>
          <app-template-strength-card
            *ngFor="let strength of this.resume.strengths"
            [strength]="strength"></app-template-strength-card>
        </div>
      </div>
    </ng-template>
    <ng-template #weaknessTemplate>
      <div *ngIf="this.resume.weakness.length"
           fxLayout="row" fxLayoutGap="30px" class="container border-container">
        <mat-icon>favorite</mat-icon>
        <div fxLayout="column">
          <h4>Weakness</h4>
          <app-template-weakness-card
            *ngFor="let weakness of this.resume.weakness"
            [weakness]="weakness"></app-template-weakness-card>
        </div>
      </div>
    </ng-template>
  `,
  styles: [`
    h1 {
      color: #fff;
      font-weight: bold;
      text-transform: uppercase;
      line-height: 37pt;
      text-align: center;
    }

    h4 {
      color: #fff;
      font-weight: bold;
      text-transform: uppercase;
    }

    mat-icon {
      font-size: 30px;
    }

    .container {
      color: #fff;
      margin-top: 5%;
      width: 90%
    }

    .border-container {
      border-bottom: 1px solid #fff;
      margin-bottom: 2rem;
      padding-bottom: 1rem;
    }

    .profile-pic {
      background-color: transparent;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      margin-bottom: 10%;
      border: 3px solid white;
      width: 75%;
      height: 200px;
    }
  `]
})

export class TemplateContactDetailComponent implements AfterContentInit {
  @Input() resume: Resume;
  imageUrl = '';

  constructor() {
  }

  ngAfterContentInit() {
    this.imageUrl = this.resume.image_url ? this.resume.image_url : '../../assets/testimonial.png';
  }
}
