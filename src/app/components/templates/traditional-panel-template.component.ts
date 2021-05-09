import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Resume} from '../../models/resume';

@Component({
  selector: 'app-traditional-template',
  template: `
    <div  *ngIf="this.resume" fxLayout="column" fxLayoutAlign="center center">
      <mat-card class="res-blue-container">
        <div fxLayout="row" fxLayoutAlign="center center" fxHide.gt-xs>
          <button mat-raised-button style="cursor: pointer;color: #fff;margin-bottom: 10px;background: #538ec3"
                  (click)="download()">DOWNLOAD
          </button>
        </div>
        <div fxLayout="column" id="html" fxLayoutGap="5px" fxFlexAlign="center center" style="margin-left:2%;margin-right: 2%">
          <div style="margin-left:1%;" *ngIf="this.resume.contact_details">
            <h1 style="text-transform:uppercase !important;font-size:30px;text-align:center;">
              {{this.resume.contact_details.first_name}}
              {{this.resume.contact_details.last_name}}</h1>
            <p style="text-align:center;font-size:15px;color:#767270;word-break:break-word;">
              {{this.resume.contact_details.address}}<br>
              {{this.resume.contact_details.city}},{{this.resume.contact_details.state}}-{{this.resume.contact_details.zip_code}}
              <br>
             {{this.resume.contact_details.phone_number}}
            </p>
            <h5 style="color:#538ec3;text-align:center;">
              <u>{{this.resume.contact_details.email}}</u></h5>
          </div>
          <div style="margin-top:1%;margin-left:1%;" *ngIf="this.resume.contact_details">
            <p style="border-bottom-width:1px;border-bottom-style:solid;
        padding-bottom:22px;font-family:SERIF;font-size:18px;text-align:center;margin-top: 5%">
              {{this.resume.contact_details.summary}}</p>
          </div>
          <div style="margin-left:1%;" *ngIf="this.resume.industrialExposures.length">
            <h1>EXPERIENCE as an Intern</h1>
            <ng-container *ngFor="let industrialExposure of this.resume['industrialExposures']">
              <h3 style="text-transform:uppercase;color:#767270;margin-top:3%;">
                {{industrialExposure.organisation}}</h3>
              <span *ngIf="industrialExposure.end_month" style="color:#5da4d9;
          text-transform:uppercase;margin-top:5%;">
                    {{industrialExposure.start_month}} {{industrialExposure.start_year}} -
                {{industrialExposure.end_month}} {{industrialExposure.end_year}}
                  </span>
              <span *ngIf="!industrialExposure.end_month" style="color:#5da4d9
          ;text-transform:uppercase;margin-top:5%;">
                    {{industrialExposure.start_month}} {{industrialExposure.start_year}}
                  </span>
              <h4 style="color:#767270;">
                {{industrialExposure.city}}, {{industrialExposure.state}}
              </h4>
              <p style="padding-bottom:4%;color:#767270;">
                {{industrialExposure.work}}</p>
            </ng-container>
          </div>
          <div style="margin-left:1%;" *ngIf="this.resume.employment_history.length">
            <h1>Work Experience</h1>
            <ng-container *ngFor="let work of this.resume['employment_history']">
              <h2 style="margin-top:3%;color:#767270;">{{work.designation}}</h2>
              <span *ngIf="work.end_year" style="color:#5da4d9;
          text-transform:uppercase;margin-top:5%;"
              >{{work.start_month}} {{work.start_year}} - {{work.end_month}} {{work.end_year}}</span>
              <span *ngIf="!work.end_year" style="color:#5da4d9;
          text-transform:uppercase;margin-top:5%;">
                {{work.start_month}} {{work.start_year}} - Present</span>
              <h4 style="padding-bottom:4%;color:#767270;">{{work.employer}}</h4>
            </ng-container>
          </div>
          <div style="margin-left:1%;" *ngIf="this.resume.education.length">
            <h1>EDUCATION</h1>
            <ng-container *ngFor="let education of this.resume['education']">
              <h3 style="text-transform:uppercase;color:#767270;margin-top:3%;">
                {{education.degree_type}}
                <span style="text-transform:lowercase !important;font-size:10pt;color:#767270;margin-top:5%;">
              @{{education.school_name}}</span></h3>
              <span style="color:#5da4d9;text-transform:uppercase;margin-top:5%;">
            {{education.graduation_month}} {{education.graduation_year}}</span>
              <h4 style="padding-bottom:4%;color:#767270;">
                {{education.city}}, {{education.state}} <br>
                {{education.field}} - {{education.percentage}}
              </h4>
            </ng-container>
          </div>
          <div style="margin-left:1%;
      padding-bottom:6px;" *ngIf="this.resume.skills.length">
            <h1 style="margin-bottom:2%;">ADDITIONAL SKILLS</h1>
            <ng-container *ngFor="let skill of this.resume['skills']">
              <ul style="color:#767270;font-weight:bold;font-size:16px;margin-left:3%;margin-top:3%; list-style-type: circle">
                <li>
                  {{skill.skill}}
                </li>
              </ul>
            </ng-container>
          </div>
          <div style="margin-left:1%;padding-bottom:6px;" *ngIf="this.resume.award_achivements.length">
            <h1 style="margin-bottom:2%;">AWARD AND ACHIEVEMENTS</h1>
            <ng-container *ngFor="let award of this.resume['award_achivements']">
              <ul style="color:#767270;font-weight:bold;font-size:16px;margin-left:3%;margin-top:3%; list-style-type: circle">
                <li>
                  {{award.awards_and_achivements}}
                </li>
              </ul>
            </ng-container>
          </div>

          <div class="border" style="margin-left:1%;padding-bottom:6px;" *ngIf="this.resume.objectives.length">
            <h1>OBJECTIVES</h1>
            <ng-container *ngFor="let objective of this.resume['objectives']">
              <h4 class="h3-span" style="text-transform:uppercase;color:#767270;margin-top:3%;">
                {{objective.objective}}<br>
                {{objective.date}}<br>
                {{objective.place}}
              </h4>
              <p class="indus-p-h4" style="color:#767270;">{{objective.declaration}}</p>
            </ng-container>
          </div>
          <div class="border" style="margin-left:1%;padding-bottom:6px;" *ngIf="this.resume.interests.length">
            <h1>ADDITIONAL INTERESTS</h1>
            <ng-container *ngFor="let interest of this.resume['interests']">
              <ul style="list-style-type:circle;color:#767270;font-weight:bold;font-size:16px;margin-left:3%;margin-top:3%;
word-break: break-word;">
                <li>
                  {{interest.interest}}
                </li>
              </ul>
            </ng-container>
          </div>
          <div class="border" style="margin-left:1%;padding-bottom:6px;" *ngIf="this.resume.languages.length">
            <h1>LANGUAGES I SPEAK</h1>
            <ng-container *ngFor="let language of this.resume['languages']">
              <ul style="list-style-type:circle;color:#767270;font-weight:bold;font-size:16px;margin-left:3%;margin-top:3%;">
                <li>
                  {{language.name}}
                </li>
              </ul>
            </ng-container>
          </div>
          <div class="border" style="margin-left:1%;" *ngIf="this.resume.projectDetails.length">
            <h1>PROJECT DETAILS</h1>
            <ng-container *ngFor="let projectDetail of this.resume['projectDetails']">
              <h4 style="margin-top:3%;padding-bottom:6px;">
                {{projectDetail.title}}<br>
                {{projectDetail.description}}<br>
                {{projectDetail.duration}}<br>
                {{projectDetail.role}}
              </h4>
            </ng-container>
          </div>
          <div class="border" style="margin-left:1%;" *ngIf="this.resume.strengths.length">
            <h1>STRENGTH</h1>
            <ng-container *ngFor="let strength of this.resume['strengths']">
              <ul style=" list-style-type: circle;margin-top: 3%;padding-bottom:6px;">
                <li>
                  {{strength.name}}
                </li>
              </ul>
            </ng-container>
          </div>
          <div class="border" style="margin-left:1%;" *ngIf="this.resume.weakness.length">
            <h1>WEAKNESS</h1>
            <ng-container *ngFor="let weakness of this.resume['weakness']">
              <ul style=" list-style-type: circle;margin-top: 3%;padding-bottom:6px;">
                <li>
                  {{weakness.name}}
                </li>
              </ul>
            </ng-container>
          </div>
          <div class="border" style="margin-left:1%;border-bottom-width:1px;border-bottom-style:solid;
      border-bottom-color:#767270;" *ngIf="this.resume.refrences.length">
            <h1>Reference</h1>
            <ng-container *ngFor="let refrence of this.resume['refrences']">
              <h4 style="padding-bottom:10px;margin-top: 3%">
                {{refrence.name}}<br>
                {{refrence.relationship}}<br>
                {{refrence.company}}<br>
                {{refrence.email}}<br>
                {{refrence.phone}}<br>
                {{refrence.address}}
              </h4>
            </ng-container>
          </div>
        </div>
        <div class="hover" fxLayout="column" fxLayoutAlign="center center" fxHide.xs>
          <div fxLayout="row" fxLayoutAlign="center center">
            <button (click)="download()" mat-icon-button>
              <mat-icon style="cursor: pointer">download</mat-icon>
            </button>
          </div>
        </div>
      </mat-card>
    </div>
  `,
  styles: [`
    mat-card {
      width: 8in;
      margin-top: 1%;
      box-shadow: 1px 1px 8px 8px rgba(0, 0, 0, 0.2) !important;
      margin-bottom: 1%;
    }

    h1 {
      padding-top: 22px;
      font-weight: 100;
      color: #000000;
    }

    h3, span {
      text-transform: uppercase;
      color: #767270;
      margin-top: 5%;
    }

    ul {
      color: #767270;
      font-weight: bold;
      font-size: 16px;
    }

    h4, p {
      color: #767270;
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

    #hover-i {
      color: white;
      font-size: 60px;
    }

    /*#html {*/
    /*background: #fafafa;*/
    /*}*/

    .hover:hover {
      opacity: 0.9;
      transition: opacity .8s;
    }
  `]
})
export class TraditionalPanelTemplateComponent {
  @Input() resume: Resume;
  @Output() downloadTemplate = new EventEmitter<string>();


  constructor() {
  }

  download() {
    const innerHtml = document.getElementById('html').innerHTML;
    const html = `<html><head>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
 <link rel="stylesheet"
        href="//fonts.googleapis.com/css?family=Google+Sans:400|Roboto:400,400italic,500,500italic,700,700italic|
        Roboto+Mono:400,500,700|Material+Icons"
  >
<style type="text/css">

h1{
font-weight:100;
 color: #000000;
 padding-top: 22px;
font-size: 25px;
font-family: 'Google Sans', Roboto, sans-serif;
}
 h3, span {
      text-transform: uppercase;
      color: #767270;
      margin-top: 5%;
    }

    ul {
      color: #767270;
      font-weight: bold;
      font-size: 16px;
    }
    h4, p {
      color: #767270;
    }
</style>
<body>
${innerHtml}
</body>
</head></html>`;
    this.downloadTemplate.emit(html);
  }
}
