import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Resume} from '../../models/resume';

@Component({
  selector: 'app-modern-template',
  template: `
    <div  *ngIf="this.resume" fxLayout="column" fxLayoutAlign="center center">
      <mat-card class="res-blue-container">
        <div fxLayout="row" fxLayoutAlign="center center" fxHide.gt-xs>
          <button mat-raised-button style="cursor: pointer;color: #fff;margin-bottom: 10px;background: #ba0018;"
                  (click)="download()">DOWNLOAD
          </button>
        </div>
        <div id="html" class="w" itemscope itemtype="http://schema.org/Person">
          <header class="clearfix" *ngIf="this.resume.contact_details">
            <div id="info">
              <h1 style="margin-bottom: 15px"><span itemprop="name">{{this.resume.contact_details.first_name}}
                {{this.resume.contact_details.last_name}}</span></h1>
              <!--<h3><span itemprop="jobTitle">Freelance Writer &amp; Web Developer</span></h3>-->
              <small style="margin-bottom: 10px" itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
                {{this.resume.contact_details.address}}<br>
                {{this.resume.contact_details.city}},{{this.resume.contact_details.state}}-
                {{this.resume.contact_details.zip_code}}
              </small>
              <small><span itemprop="email">
              <small><span itemprop="email">
                {{this.resume.contact_details.email}}</span></small>
              </span>
              </small>
            </div>
          </header>

          <section id="profile" *ngIf="this.resume.contact_details">
            <h2>Summary</h2>
            <p itemprop="description">{{this.resume.contact_details.summary}}</p>
          </section>

          <section id="education" *ngIf="this.resume.education.length">
            <h2>Qualification</h2>
            <ng-container itemprop="alumniOf" *ngFor="let education of this.resume['education']">
              <h3><span>{{education.degree_type}}</span> in {{education.field}}</h3>
              <div class="emph">{{education.school_name}}</div>
              <div class="emph">{{education.percentage}}</div>
              <div style="padding-left: 35px;margin-bottom: 15px" class="row">
                <div class="col light">{{education.city}}, {{education.state}}</div>
                <div class="col-right light">{{education.graduation_month}} {{education.graduation_year}}</div>
              </div>
            </ng-container>
          </section>

          <section id="skills" class="clearfix" itemscope itemtype="http://schema.org/ItemList"
                   *ngIf="this.resume.skills.length">
            <h2 itemprop="name">Skillset</h2>
            <section id="skills-left" *ngFor="let skill of this.resume['skills']">
              <ul>
                <li id="bullet" itemprop="itemListElement">{{skill.skill}}</li>
              </ul>
            </section>
          </section>

          <section id="experience" *ngIf="this.resume.employment_history.length">
            <h2>Work Experience</h2>
            <ng-container itemprop="alumniOf" *ngFor="let work of this.resume['employment_history']">
              <h3><span>{{work.organisation}}</span> - {{work.city}}, {{work.state}}</h3>
              <div class="emph">{{work.employer}}, {{work.designation}}</div>
              <div style="padding-left: 35px;margin-bottom: 15px" class="row">
                <div class="col-right light" *ngIf="work.end_year">
                  {{work.start_month}} {{work.start_year}} - {{work.end_month}} {{work.end_year}}
                </div>
                <div class="col-right light" *ngIf="!work.end_year">
                  {{work.start_month}} {{work.start_year}} - Present
                </div>
              </div>
            </ng-container>
          </section>

          <section id="industrial-exposure" *ngIf="this.resume.industrialExposures.length">
            <h2>Training</h2>
            <ng-container itemprop="alumniOf" *ngFor="let industrialExposure of this.resume['industrialExposures']">
              <h3><span>{{industrialExposure.organisation}}</span> - {{industrialExposure.city}},
                {{industrialExposure.state}}</h3>
              <div class="emph">{{industrialExposure.work}}</div>
              <div style="padding-left: 35px;margin-bottom: 15px" class="row">
                <div class="col-right light" *ngIf="industrialExposure.end_month">
                  {{industrialExposure.start_month}} {{industrialExposure.start_year}} -
                  {{industrialExposure.end_month}} {{industrialExposure.end_year}}
                </div>
                <div class="col-right light" *ngIf="!industrialExposure.end_month">
                  {{industrialExposure.start_month}} {{industrialExposure.start_year}} - Present
                </div>
              </div>
            </ng-container>
          </section>

          <section id="project-detail" *ngIf="this.resume.projectDetails.length">
            <h2>Project Details</h2>
            <ng-container itemprop="alumniOf" *ngFor="let projectDetail of this.resume['projectDetails']">
              <h3><span>{{projectDetail.title}}</span> - {{projectDetail.role}}</h3>
              <div class="emph">{{projectDetail.description}}</div>
              <div style="padding-left: 35px;margin-bottom: 15px" class="row">
                <div class="col-right light">
                  {{projectDetail.duration}}
                </div>
              </div>
            </ng-container>
          </section>

          <section id="Awards-achievement" *ngIf="this.resume.award_achivements.length">
            <h2>Award And Achievements</h2>
            <ul itemprop="description" *ngFor="let award of this.resume['award_achivements']">
              <li>
                <div fxLayout="row" fxLayoutGap="10px">
                  <span class="hack">{{award.awards_and_achivements}}</span>
                </div>
              </li>
            </ul>
          </section>

          <section id="languages" class="clearfix" itemscope itemtype="http://schema.org/ItemList"
                   *ngIf="this.resume.languages.length">
            <h2 itemprop="name">Languages</h2>
            <section id="skills-left" *ngFor="let language of this.resume['languages']">
              <ul>
                <li id="bullet" itemprop="itemListElement">{{language.name}}</li>
              </ul>
            </section>
          </section>

          <section id="interest" *ngIf="this.resume.interests.length">
            <h2>Hobbies And Interests</h2>
            <ul style="word-break: break-word"
                itemprop="description" *ngFor="let interest of this.resume['interests']">
              <li>
                <div fxLayout="row" fxLayoutGap="10px">
                  <span class="hack">{{interest.interest}}</span>
                </div>
              </li>
            </ul>
          </section>

          <section id="Strength" *ngIf="this.resume.strengths.length">
            <h2>Strength</h2>
            <ul itemprop="description" *ngFor="let strength of this.resume['strengths']">
              <li>
                <div fxLayout="row" fxLayoutGap="10px">
                  <span class="hack">{{strength.name}}</span>
                </div>
              </li>
            </ul>
          </section>

          <section id="Weakness" *ngIf="this.resume.weakness.length">
            <h2>Weakness</h2>
            <ul itemprop="description" *ngFor="let weakness of this.resume['weakness']">
              <li>
                <div fxLayout="row" fxLayoutGap="10px">
                  <span class="hack">{{weakness.name}}</span>
                </div>
              </li>
            </ul>
          </section>

          <section id="reference" *ngIf="this.resume.refrences.length">
            <ng-container *ngFor="let refrence of this.resume['refrences']">
              <h2>Reference</h2>
              <h3>
                {{refrence.name}} From {{refrence.company}}
              </h3>
              <div class="emph">{{refrence.relationship}}</div>
              <div class="emph"><span style="text-transform: lowercase">{{refrence.email}}</span></div>
              <div class="emph">{{refrence.phone}}</div>
              <div class="emph">{{refrence.address}}</div>
            </ng-container>
          </section>

          <section id="reference" *ngIf="this.resume.objectives.length">
            <ng-container *ngFor="let objective of this.resume['objectives']">
              <h2>Objective</h2>
              <h3>
                {{objective.objective}} - {{objective.place}}
              </h3>
              <p>
                {{objective.date}}<br>{{objective.declaration}}</p>
            </ng-container>
          </section>

        </div>
        <div class="hover" fxLayout="column" fxHide.xs fxLayoutAlign="center center">
          <div fxLayout="row" fxLayoutAlign="center center">
            <button (click)="download()" mat-icon-button>
              <mat-icon style="cursor: pointer">download</mat-icon>
            </button>
          </div>
        </div>
      </mat-card>
    </div>
    <style type="text/css">
      @import url('https://fonts.googleapis.com/css?family=Balthazar|Simonetta:400,900');

      * {
        margin: 0;
        padding: 0;
      }

      html {
        height: 101%;
      }

      body {
        background: #f2f2f2;
        font-size: 62.5%;
        padding-bottom: 65px;
      }

      .hack {
        font-family: "Balthazar", "Droid Serif", serif;
        color: #565656;
        font-size: 25px;
      }

      h1 {
        font-family: "Simonetta", "Trebuchet MS", Arial, sans-serif;
        color: #ba0018;
        font-size: 40px;
        text-transform: capitalize;
        margin-bottom: 6px;
      }

      h2 {
        font-family: "Simonetta", "Trebuchet MS", Arial, sans-serif;
        color: #ba0018;
        font-size: 35px;
        margin-bottom: 10px;
        text-decoration: underline;
      }

      h3 {
        font-family: "Trebuchet MS", Verdana, Arial, sans-serif;
        color: #777;
        padding-left: 35px;
        text-transform: capitalize;
        font-size: 25px;
        margin-bottom: 10px;
      }

      h4 {
        font-family: "Trebuchet MS", Verdana, Arial, sans-serif;
        color: #656565;
        font-weight: bold;
        font-size: 1.75em;
        margin-bottom: 4px;
      }

      p {
        font-family: "Balthazar", "Droid Serif", serif;
        color: #565656;
        font-size: 25px;
        line-height: 1.4em;
        margin-bottom: 15px;
        padding-left: 35px;
      }

      small {
        font-family: "Balthazar", "Droid Serif", serif;
        color: #656565;
        font-size: 1.2em;
        display: block;
        margin-bottom: 6px;
      }

      ul {
        display: block;
        list-style: none;
      }

      ul li {
        padding-left: 45px;
        list-style-type: none;
        vertical-align: top;
        margin-bottom: 5px;
      }

      #bullet {
        padding: 0 10px;
        margin-top: 8px;
        margin-right: -30px;
        margin-left: 35px;
        display: inline-block;
        vertical-align: top;
        horizontal-align: le;
        font-family: "Balthazar", "Droid Serif", serif;
        color: wheat;
        background: #ba0018;
        font-size: 25px;
        line-height: 2em;
      }

      .emph {
        font-family: "Balthazar", "Droid Serif", serif;
        padding-left: 35px;
        color: #565656;
        font-size: 20px;
        text-transform: capitalize;
      }

      img {
        border: 0;
        max-width: 100%;
      }

      a {
        color: #5582d6;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }

      /** @group core layout **/
      .w {
        -webkit-border-bottom-left-radius: 8px;
        -webkit-border-bottom-right-radius: 8px;
        -moz-border-radius-bottomleft: 8px;
        -moz-border-radius-bottomright: 8px;
      }

      header {
        width: 100%;
      }

      .light {
        color: #aaa;
        letter-spacing: 1px;
        font-size: 14px;
        line-height: 28px;
        font-family: 'Source Sans Pro', sans-serif;
        text-transform: uppercase;
      }

      .row:before, .row:after {
        content: "";
        display: table;
      }

      .row:after {
        clear: both
      }

      .col {
        float: left
      }

      .col-right {
        float: right
      }

      /** @group personal settings **/
      #info {
        float: left;
        margin-bottom: 12px;
      }

      #photo {
        float: right;
      }

      #photo img {
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        background-color: #fff;
        border: 1px solid #ccc;
        padding: 5px;
      }

      /** @group skills **/
      #skills-left {
        display: block;
        float: left;
        margin-right: 30px;
      }

      #skills-right {
        display: block;
        float: left;
      }

      /** @group clearfix **/
      .clearfix:after {
        content: ".";
        display: block;
        clear: both;
        visibility: hidden;
        line-height: 0;
        height: 0;
      }

      .clearfix {
        display: inline-block;
      }

      html[xmlns] .clearfix {
        display: block;
      }

      * html .clearfix {
        height: 1%;
      }
    </style>
  `,
  styles: [`
    mat-card {
      width: 8in;
      margin-top: 1%;
      box-shadow: 1px 1px 8px 8px rgba(0, 0, 0, 0.2) !important;
      margin-bottom: 1%;
      padding: 24px;
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
      opacity: 0.9;
      transition: opacity .8s;
    }

    #hover-i {
      color: white;
      font-size: 60px;
    }

    @media only screen and (max-width: 740px) {
      h1 {
        font-size: 4.5em;
      }

      h3 {
        font-size: 2.2em;
      }

      h2 {
        display: block;
        text-align: center;
      }

      #info {
        float: none;
        display: block;
        text-align: center;
      }

      #photo {
        float: none;
        display: block;
        text-align: center;
      }

      #w {
        padding: 20px 15px;
      }

      p {
        padding: 0;
      }
    }

    @media only screen and (max-width: 570px) {
      ul li {
        display: inline-block;
        padding-left: 15px;
        width: 140px;
        background-position: -5px 0px;
        margin-right: 6px;
        line-height: 1.7em;
      }

      #skills-left, skills-right {
        margin-bottom: 15px;
      }
    }

    @media only screen and (max-width: 480px) {
      ul li {
        width: 120px;
      }

      #w {
        margin: 0 20px;
      }
    }

    @media only screen and (max-width: 320px) {
      #w {
        margin: 0 10px;
      }
    }

    /** iPhone only **/
    @media screen and (max-device-width: 480px) {
      ul li {
        width: 100%;
      }
    }
  `]
})
export class ModernTemplateComponent {
  @Input() resume: Resume;

  @Output() downloadTemplate = new EventEmitter<string>();

  constructor() {

  }

  download() {
    const innerHtml = document.getElementById('html').innerHTML;
    const html = `<html>
<head>
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
 <link href="https://fonts.googleapis.com/css?family=Balthazar|Simonetta:400,900|Material+Icons" rel="stylesheet">
<style type="text/css">
    * {
        margin: 0;
        padding: 0;
      }

      html {
        height: 101%;
      }

      body {
        background: #f2f2f2;
        font-size: 62.5%;
        padding-bottom: 65px;
      }

      .hack {
        font-family: "Balthazar", "Droid Serif", serif;
        color: #565656;
        font-size: 25px;
      }

      h1 {
        font-family: "Simonetta", "Trebuchet MS", Arial, sans-serif;
        color: #ba0018;
        font-size: 40px;
        text-transform: capitalize;
        margin-bottom: 6px;
      }

      h2 {
        font-family: "Simonetta", "Trebuchet MS", Arial, sans-serif;
        color: #ba0018;
        font-size: 35px;
        margin-bottom: 10px;
        text-decoration: underline;
      }

      h3 {
        font-family: "Trebuchet MS", Verdana, Arial, sans-serif;
        color: #777;
        padding-left: 35px;
        text-transform: capitalize;
        font-size: 25px;
        margin-bottom: 10px;
      }

      h4 {
        font-family: "Trebuchet MS", Verdana, Arial, sans-serif;
        color: #656565;
        font-weight: bold;
        font-size: 1.75em;
        margin-bottom: 4px;
      }

      p {
        font-family: "Balthazar", "Droid Serif", serif;
        color: #565656;
        font-size: 25px;
        line-height: 1.4em;
        margin-bottom: 15px;
        padding-left: 35px;
      }

      small {
        font-family: "Balthazar", "Droid Serif", serif;
        color: #656565;
        font-size: 1.2em;
        display: block;
        margin-bottom: 6px;
      }

      ul {
        display: block;
        list-style: none;
      }

      ul li {
        padding-left: 45px;
        list-style-type: none;
        vertical-align: top;
        margin-bottom: 5px;
      }

      #bullet {
        padding: 0 10px;
        margin-top: 8px;
        margin-right: -30px;
        margin-left: 35px;
        display: inline-block;
        vertical-align: top;
        horizontal-align: le;
        font-family: "Balthazar", "Droid Serif", serif;
        color: wheat;
        background: #ba0018;
        font-size: 25px;
        line-height: 2em;
      }

      .emph {
        font-family: "Balthazar", "Droid Serif", serif;
        padding-left: 35px;
        color: #565656;
        font-size: 20px;
        text-transform: capitalize;
      }

      img {
        border: 0;
        max-width: 100%;
      }

      a {
        color: #5582d6;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }

      /** @group core layout **/
      .w {
        -webkit-border-bottom-left-radius: 8px;
        -webkit-border-bottom-right-radius: 8px;
        -moz-border-radius-bottomleft: 8px;
        -moz-border-radius-bottomright: 8px;
      }

      header {
        width: 100%;
      }

      .light {
        color: #aaa;
        letter-spacing: 1px;
        font-size: 14px;
        line-height: 28px;
        font-family: 'Source Sans Pro', sans-serif;
        text-transform: uppercase;
      }

      .row:before, .row:after {
        content: "";
        display: table;
      }

      .row:after {
        clear: both
      }

      .col {
        float: left
      }

      .col-right {
        float: right
      }

      /** @group personal settings **/
      #info {
        float: left;
        margin-bottom: 12px;
      }

      #photo {
        float: right;
      }

      #photo img {
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        background-color: #fff;
        border: 1px solid #ccc;
        padding: 5px;
      }

      /** @group skills **/
      #skills-left {
        display: block;
        float: left;
        margin-right: 30px;
      }

      #skills-right {
        display: block;
        float: left;
      }

      /** @group clearfix **/
      .clearfix:after {
        content: ".";
        display: block;
        clear: both;
        visibility: hidden;
        line-height: 0;
        height: 0;
      }

      .clearfix {
        display: inline-block;
      }

      html[xmlns] .clearfix {
        display: block;
      }

      * html .clearfix {
        height: 1%;
      }
    html{
zoom:0.8;
}
</style>
<body>
${innerHtml}
</body>
</head>
</html>`;
    this.downloadTemplate.emit(html);
  }
}
