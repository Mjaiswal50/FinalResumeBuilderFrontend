import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Resume} from '../../models/resume';

@Component({
  selector: 'app-blues-template',
  template: `
    <div *ngIf="this.resume" fxLayout="column" fxLayoutAlign="center center">
      <mat-card>
        <div id="html">
          <div *ngIf="this.resume.contact_details">
            <ng-container *ngTemplateOutlet="contactDetail"></ng-container>
          </div>
          <div *ngIf="this.resume.industrialExposures.length">
            <ng-container *ngTemplateOutlet="industrialExposure"></ng-container>
          </div>
          <div *ngIf="this.resume.employment_history.length">
            <ng-container *ngTemplateOutlet="workExpTemplate"></ng-container>
          </div>
          <div *ngIf="this.resume.education.length">
            <ng-container *ngTemplateOutlet="educationTemplate"></ng-container>
          </div>
          <div *ngIf="this.resume.skills.length">
            <ng-container *ngTemplateOutlet="skillTemplate"></ng-container>
          </div>
          <div *ngIf="this.resume.languages.length">
            <ng-container *ngTemplateOutlet="languageTemplate"></ng-container>
          </div>
          <div *ngIf="this.resume.award_achivements.length">
            <h1 class="education-heading">Achievements</h1>
            <ng-container *ngFor="let award of this.resume['award_achivements']">
              <ul itemprop="description">
                <li>
                  <div fxLayout="row" fxLayoutGap="10px">
                    <i class="fa fa-dot-circle-o" style="color:#538ec3;" aria-hidden="true"></i>
                    <span class="hack">{{award.awards_and_achivements}}</span>
                  </div>
                </li>
              </ul>
            </ng-container>
          </div>
          <div *ngIf="this.resume.interests.length">
            <h1 class="education-heading">Interests</h1>
            <ng-container *ngFor="let interest of this.resume['interests']">
              <ul style="word-break: break-word"
                  itemprop="description">
                <li>
                  <div fxLayout="row" fxLayoutGap="10px">
                    <i class="fa fa-dot-circle-o" style="color:#538ec3;" aria-hidden="true"></i>
                    <span class="hack">{{interest.interest}}</span>
                  </div>
                </li>
              </ul>
            </ng-container>
          </div>
          <div *ngIf="this.resume.objectives.length">
            <ng-container *ngTemplateOutlet="objectiveTemplate"></ng-container>
          </div>
          <div *ngIf="this.resume.projectDetails.length">
            <ng-container *ngTemplateOutlet="projectDetailTemplate"></ng-container>
          </div>
          <div *ngIf="this.resume.strengths.length">
            <h1 class="education-heading">Strength</h1>
            <ng-container *ngFor="let strength of this.resume['strengths']">
              <ul>
                <li>
                  <div fxLayout="row" fxLayoutGap="10px">
                    <i class="fa fa-dot-circle-o" style="color:#3683cc;" aria-hidden="true"></i>
                    <span class="hack">{{strength.name}}</span>
                  </div>
                </li>
              </ul>
            </ng-container>
          </div>
          <div *ngIf="this.resume.weakness.length">
            <h1 class="education-heading">Weakness</h1>
            <ng-container *ngFor="let weakness of this.resume['weakness']">
              <ul>
                <li>
                  <div fxLayout="row" fxLayoutGap="10px">
                    <i class="fa fa-dot-circle-o" style="color:#3683cc;" aria-hidden="true"></i>
                    <span class="hack">{{weakness.name}}</span>
                  </div>
                </li>
              </ul>
            </ng-container>
          </div>
          <div *ngIf="this.resume.refrences.length">
            <ng-container *ngTemplateOutlet="referenceTemplate"></ng-container>
          </div>
          <div class="hover" fxLayout="column" fxLayoutAlign="center center">
            <div fxLayout="row" fxLayoutAlign="center center">
              <button (click)="download()" mat-icon-button>
                <mat-icon style="cursor: pointer">download</mat-icon>
              </button>
            </div>
          </div>
        </div>
      </mat-card>
    </div>
    <ng-template #skillTemplate>
      <h1 class='education-heading'>Skills</h1>
      <div *ngFor="let skill of this.resume['skills']">
        <ul>
          <li>
            <div fxLayout="row" fxLayoutGap="10px">
              <i class="fa fa-dot-circle-o" style="color:#3683cc;" aria-hidden="true"></i>
              <span class="hack">{{skill.skill}}</span>
            </div>
          </li>
        </ul>
      </div>
    </ng-template>
    <ng-template #referenceTemplate>
      <h1 class="education-heading">References</h1>
      <ng-container *ngFor="let refrence of this.resume['refrences']">
        <h3 style="color:#767270;" class="container">
          {{refrence.name}} <span style="text-transform: lowercase; font-size: 10pt;">
                @{{refrence.company}}</span><br>
          {{refrence.relationship}}<br>
          <span style="text-transform: lowercase">{{refrence.email}}</span><br>
          {{refrence.phone}}<br>
          {{refrence.address}}
        </h3>
      </ng-container>
    </ng-template>
    <ng-template #objectiveTemplate>
      <h1 class="education-heading">Objective</h1>
      <ng-container *ngFor="let objective of this.resume['objectives']">
        <h3 style="color: #767270;" class="h3-span">
          {{objective.objective}}<br>
          {{objective.date}}<br>
          {{objective.place}}
        </h3>
        <p class="h4-p">{{objective.declaration}}</p>
      </ng-container>
    </ng-template>
    <ng-template #contactDetail>
      <div *ngIf="this.resume.contact_details">
        <h1 class="main-heading text-align">{{this.resume.contact_details.first_name}}
          {{this.resume.contact_details.last_name}}</h1>
        <p class="address text-align">{{this.resume.contact_details.address}}
          {{this.resume.contact_details.city}},{{this.resume.contact_details.state}}-{{this.resume.contact_details.zip_code}}</p>
        <p class="text-align address">{{this.resume.contact_details.phone_number}}</p>
        <p class="text-align" style="color: #4c86bd;font-weight: bold">{{this.resume.contact_details.email}}</p>
        <a class="text-align" style="color: #4c86bd;"
           [href]="this.resume.contact_details.website_url">{{this.resume.contact_details.website_url}}</a>
        <p style="  border-bottom: 2px solid #87b0d5;padding-bottom: 1rem">{{this.resume.contact_details.summary}}</p>
      </div>
    </ng-template>
    <ng-template #industrialExposure>
      <h1 class="education-heading">Industrial Exposure as an Intern</h1>
      <div *ngFor="let industrialExposure of this.resume.industrialExposures">
        <h3 class="h3-span">{{industrialExposure.organisation}}</h3>
        <span class="h3-span" style="color: #5da4d9;float: right; margin-top: -5%;" *ngIf="industrialExposure.end_month">
                      {{industrialExposure.start_month}} {{industrialExposure.start_year}} -
          {{industrialExposure.end_month}} {{industrialExposure.end_year}}
                    </span>
        <span class="h3-span" style="color: #5da4d9;float: right; margin-top: -5%;" *ngIf="!industrialExposure.end_month">
                      {{industrialExposure.start_month}} {{industrialExposure.start_year}} - Present
                    </span>
        <h4 class="h4-p h4">
          {{industrialExposure.city}}, {{industrialExposure.state}}
        </h4>
        <p class="h4-p" style="margin-top: 4%;" class="container">{{industrialExposure.work}}</p>
      </div>
    </ng-template>
    <ng-template #workExpTemplate>
      <h1 class="education-heading">Work Experience</h1>
      <div *ngFor="let employmentHistory  of this.resume['employment_history']">
        <h3 style="color: #3683cc" class="h3-span">{{employmentHistory.designation}}
          <span class="h3-span" style="text-transform: lowercase !important; font-size: 10pt;color: #3683cc">
                  @{{employmentHistory.organisation}}
                  </span>
        </h3>
        <span class="h3-span exp-span res-down" style="color: #5da4d9;float: right; margin-top: -2%;" *ngIf="employmentHistory.end_month">
                      {{employmentHistory.start_month}} {{employmentHistory.start_year}} -
          {{employmentHistory.end_month}} {{employmentHistory.end_year}}
                    </span>
        <span class="h3-span exp-span res-down" style="color: #5da4d9;float: right; margin-top: -2%;" *ngIf="!employmentHistory.end_month">
                      {{employmentHistory.start_month}} {{employmentHistory.start_year}} - Present
                    </span>
        <h4 class="container h4-p h4">
          {{employmentHistory.city}}, {{employmentHistory.state}} <br>
          {{employmentHistory.employer}}
        </h4>
      </div>
    </ng-template>

    <ng-template #educationTemplate>
      <h1 class="education-heading">Education</h1>
      <div *ngFor="let education of this.resume['education']">
        <h3 class="h3-span">{{education.degree_type}}
          <span class="h3-span" style="text-transform: lowercase !important; font-size: 10pt;">@{{education.school_name}}</span></h3>
        <span class="h3-span res-down"
              style="color: #5da4d9; float: right; margin-top: -5%;">{{education.graduation_month}} {{education.graduation_year}}</span>
        <h4 class="container h4 h4-p">
          {{education.city}}, {{education.state}} <br>
          {{education.field}} - {{education.percentage}}
        </h4>
      </div>
    </ng-template>
    <ng-template #languageTemplate>
      <h1 class="education-heading">Language I Speak</h1>
      <div *ngFor="let language of this.resume['languages']">
        <ul>
          <li>
            <div fxLayout="row" fxLayoutGap="10px">
              <i class="fa fa-dot-circle-o" style="color:#3683cc;" aria-hidden="true"></i>
              <span class="hack">{{language.name}}</span>
            </div>
          </li>
        </ul>
      </div>
    </ng-template>

    <ng-template #projectDetailTemplate>
      <h1 class="education-heading">Project Details</h1>
      <ng-container *ngFor="let projectDetail of this.resume['projectDetails']">
        <h3 class="h3-span">{{projectDetail.title}} <span style="text-transform: none; font-size: 13pt">
                as a {{projectDetail.role}}</span>
          <span class="h3-span" style="color: #5da4d9; font-weight: 100"> - {{projectDetail.duration}}</span></h3>
        <p style="margin-top: 4%;" class="container h4-p">{{projectDetail.description}}</p>
      </ng-container>
    </ng-template>
  `,
  styles: [`

    mat-card {
      width: 8in;
      margin-top: 1%;
      box-shadow: 1px 1px 8px 8px rgba(0, 0, 0, 0.2) !important;
      margin-bottom: 1%;
    }

    ul {
      color: #767270;
      font-weight: bold;
      font-size: 16px;
      margin-top: 2%;
    }

    .education-heading {
      color: white;
      background: #3683cc;
      margin-top: 2%;
      padding: 1% 2%;
      font-family: 'Lato', sans-serif;
    }

    .h3-span {
      text-transform: uppercase;
      color: #3683cc;
      margin-top: 5%;
    }

    .hover {
      position: absolute;
      background-color: rgba(36, 36, 36, 0.81);
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: 100;
      height: 100%;
      width: 100%;
      opacity: 0;
    }

    .hover:hover {
      opacity: 1;
      transition: opacity .8s;
    }

    .contact-summary {
      font-weight: 300;
      font-size: 10pt;
      line-height: 17pt;
      word-wrap: break-word;
      overflow: hidden;
    }

    ul li {
      vertical-align: top;
      margin-bottom: 5px;
    }

    * {
      margin: 0px;
    }

    #hover-i {
      color: white;
      font-size: 60px;
    }

    .main-heading {
      text-transform: uppercase;
      color: #538ec3;
      font-size: 2.5rem;
      font-weight: bold;
    }

    .text-align {
      text-align: center;
    }

    .address {
      color: #767270;
      word-break: break-word;
    }

    .education-heading {
      color: white;
      background: #3683cc;
      margin-top: 2%;
      padding: 1% 2%;
    }

    .h3-span {
      text-transform: uppercase;
      color: #3683cc;
      font-weight: bold;
      margin-top: 2rem;
    }

    .h4-p {
      color: #767270;
    }

    .container {
      padding-bottom: 4%;
      border-bottom: 1px solid #ddd;
    }

    .h4 {
      text-transform: capitalize;
    }
  `]
})

export class BluesTemplateComponent {
  @Input() resume: Resume;
  @Output() downloadTemplate = new EventEmitter<string>();

  constructor() {
  }

  download() {
    const innerHtml = document.getElementById('html').innerHTML;
    const html =
      `
    <html>
    <head>
</head>
<style type="text/css">
mat-card {
      width: 8in;
      margin-top: 1%;
      box-shadow: 1px 1px 8px 8px rgba(0, 0, 0, 0.2) !important;
      margin-bottom: 1%;
    }

    ul {
      color: #767270;
      font-weight: bold;
      font-size: 16px;
      margin-top: 2%;
    }

    .education-heading {
      color: white;
      background: #3683cc;
      margin-top: 2%;
      padding: 1% 2%;
      font-family: 'Lato', sans-serif;
    }

    .h3-span {
      text-transform: uppercase;
      color: #3683cc;
      margin-top: 5%;
    }

    .hover {
      position: absolute;
      background-color: rgba(36, 36, 36, 0.81);
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: 100;
      height: 100%;
      width: 100%;
      opacity: 0;
    }

    .hover:hover {
      opacity: 1;
      transition: opacity .8s;
    }

    .contact-summary {
      font-weight: 300;
      font-size: 10pt;
      line-height: 17pt;
      word-wrap: break-word;
      overflow: hidden;
    }

    ul li {
      vertical-align: top;
      margin-bottom: 5px;
    }

    * {
      margin: 0px;
    }

    #hover-i {
      color: white;
      font-size: 60px;
    }

    .main-heading {
      text-transform: uppercase;
      color: #538ec3;
      font-size: 2.5rem;
      font-weight: bold;
    }

    .text-align {
      text-align: center;
    }

    .address {
      color: #767270;
      word-break: break-word;
    }

    .education-heading {
      color: white;
      background: #3683cc;
      margin-top: 2%;
      padding: 1% 2%;
    }

    .h3-span {
      text-transform: uppercase;
      color: #3683cc;
      font-weight: bold;
      margin-top: 2rem;
    }

    .h4-p {
      color: #767270;
    }

    .container {
      padding-bottom: 4%;
      border-bottom: 1px solid #ddd;
    }

    .h4 {
      text-transform: capitalize;
    }
</style>
<body>${innerHtml}</body>
</html>
    `;
    this.downloadTemplate.emit(html);
  }
}
