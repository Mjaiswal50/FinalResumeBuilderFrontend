import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Resume} from '../../models/resume';

@Component({
  selector: 'app-royal-template',
  template: `
    <div  *ngIf="this.resume" fxLayout="column" fxLayoutAlign="center center">
      <mat-card class="res-blue-container">
        <div fxLayout="row" fxLayoutAlign="center center" fxHide.gt-xs>
          <button mat-raised-button style="cursor: pointer;color: #fff;margin-top: 2px;background: #cf8a05; position: absolute"
                  (click)="download()">DOWNLOAD
          </button>
        </div>
        <div fxLayout="column" id="html" fxLayoutGap="5px" fxFlexAlign="center center">
          <div id="cv" class="instaFade">
            <div class="mainDetails" *ngIf="this.resume.contact_details">
              <div id="name">
                <h1 style="text-transform:uppercase" class="quickFade delayTwo">{{this.resume.contact_details.first_name}}
                  {{this.resume.contact_details.last_name}}</h1>
                <!--<h2 class="quickFade delayThree">{{this.resume.employment_history.}}</h2>-->
              </div>
              <div id="contactDetails" class="quickFade delayFour">
                <ul>
                  <li><a [href]="this.resume.contact_details.email"
                                                                           target="_blank">
                    {{this.resume.contact_details.email}}</a></li>
                  <li *ngIf="this.resume.contact_details.website_url"> <a
                    [href]="this.resume.contact_details.website_url">
                    {{this.resume.contact_details.website_url}}</a></li>
                  <li>{{this.resume.contact_details.phone_number}}</li>
                </ul>
              </div>
              <div class="clear"></div>
            </div>
            <div id="mainArea" class="quickFade delayFive">
              <section *ngIf="this.resume.contact_details">
                <article>
                  <div class="sectionTitle">
                    <h1>Personal Profile</h1>
                  </div>
                  <div class="sectionContent">
                    <p>{{this.resume.contact_details.summary}}</p>
                  </div>
                </article>
                <div class="clear"></div>
              </section>
              <section *ngIf="this.resume.employment_history.length">
                <div class="sectionTitle">
                  <h1>Work Experience</h1>
                </div>

                <div class="sectionContent">
                  <ng-container *ngFor="let work of this.resume['employment_history']">
                    <article style="margin-bottom: 4%">
                      <h2>{{work.designation}}</h2>
                      <span style="color: #5da4d9;float: right;
                         margin-top: -20px;" *ngIf="work.end_year"
                            class="subDetails">{{work.start_month}} {{work.start_year}} - {{work.end_month}} {{work.end_year}}</span>
                      <span style="color: #5da4d9;float: right;
                         margin-top: -20px;" *ngIf="!work.end_year"
                            class="subDetails">{{work.start_month}} {{work.start_year}} - Present</span>
                      <p>{{work.employer}}</p>
                    </article>
                  </ng-container>
                </div>
                <div class="clear"></div>
              </section>
              <section *ngIf="this.resume.skills.length">
                <div class="sectionTitle">
                  <h1>Key Skills</h1>
                </div>
                <div class="sectionContent">
                  <ul class="keySkills">
                    <ng-container *ngFor="let skill of this.resume['skills']">
                      <li>{{skill.skill}}</li>
                    </ng-container>
                  </ul>
                </div>
                <div class="clear"></div>
              </section>
              <section *ngIf="this.resume.education.length">
                <div class="sectionTitle">
                  <h1>Education</h1>
                </div>
                <div class="sectionContent">
                  <ng-container *ngFor="let education of this.resume['education']">
                    <article style="margin-bottom: 4%;">
                      <h2>{{education.school_name}}</h2>
                      <p class="subDetails">Qualification</p>
                      <h3>{{education.degree_type}}
                        <span style="text-transform: lowercase !important; font-size: 10pt;">@{{education.school_name}}</span></h3>
                      <span class="subDetails" style="color: #5da4d9;float: right;
    margin-top: -62px;">{{education.graduation_month}} {{education.graduation_year}}</span>
                      <h4>
                        {{education.city}}, {{education.state}} <br>
                        {{education.field}} - {{education.percentage}}
                      </h4>
                    </article>
                  </ng-container>
                </div>
                <div class="clear"></div>
              </section>
              <section *ngIf="this.resume.languages.length">
                <div class="sectionTitle">
                  <h1>Language I Speak</h1>
                </div>
                <div class="sectionContent">
                  <ul class="keySkills">
                    <ng-container *ngFor="let language of this.resume['languages']">
                      <li>{{language.name}}</li>
                    </ng-container>
                  </ul>
                </div>
                <div class="clear"></div>
              </section>
              <section *ngIf="this.resume.objectives.length">
                <div class="sectionTitle">
                  <h1>Objective</h1>
                </div>
                <div class="sectionContent">
                  <ng-container *ngFor="let objective of this.resume['objectives']">
                    <article style="margin-bottom: 4%">
                      <h2>{{objective.objective}}</h2>
                      <h3>{{objective.place}}</h3>
                      <h3>{{objective.declaration}}</h3>
                      <h3>{{objective.date}}</h3>
                    </article>
                  </ng-container>
                </div>
                <div class="clear"></div>
              </section>
              <section *ngIf="this.resume.industrialExposures.length">
                <div class="sectionTitle">
                  <h1>Industrial Exposure as Intern</h1>
                </div>
                <div class="sectionContent">
                  <ng-container *ngFor="let industrialExposure of this.resume['industrialExposures']">
                    <article style="margin-bottom: 4%">
                      <h3>{{industrialExposure.organisation}}</h3>
                      <span class="subDetails" *ngIf="industrialExposure.end_year" style="color: #5da4d9;float: right;
    margin-top: -20px;">
                    {{industrialExposure.start_month}} {{industrialExposure.start_year}} -
                        {{industrialExposure.end_month}} {{industrialExposure.end_year}}
                  </span>
                      <span class="subDetails" style="color: #5da4d9;float: right;
    margin-top: -20px;" *ngIf="!industrialExposure.end_month">
                    {{industrialExposure.start_month}} {{industrialExposure.start_year}} - Present
                  </span>
                      <h4>
                        {{industrialExposure.city}}, {{industrialExposure.state}}
                      </h4>
                      <p>{{industrialExposure.work}}</p>
                    </article>
                  </ng-container>
                </div>
                <div class="clear"></div>
              </section>
              <section *ngIf="this.resume.projectDetails.length">
                <div class="sectionTitle">
                  <h1>Project Details</h1>
                </div>
                <div class="sectionContent">
                  <ng-container *ngFor="let projectDetail of this.resume['projectDetails']">
                    <article style="margin-bottom: 4%">
                      <h3>
                        {{projectDetail.title}}<br>
                        {{projectDetail.description}}<br>
                        {{projectDetail.duration}}<br>
                        {{projectDetail.role}}
                      </h3>
                    </article>
                  </ng-container>
                </div>
                <div class="clear"></div>
              </section>
              <section *ngIf="this.resume.award_achivements.length">
                <div class="sectionTitle">
                  <h1>Awards</h1>
                </div>
                <div class="sectionContent">
                  <article>
                    <ng-container *ngFor="let award of this.resume['award_achivements']">
                      <ul style="list-style-type: circle">
                        <li>
                          {{award.awards_and_achivements}}
                        </li>
                      </ul>
                    </ng-container>
                  </article>
                </div>
                <div class="clear"></div>
              </section>
              <section *ngIf="this.resume.interests.length">
                <div class="sectionTitle">
                  <h1>Interests</h1>
                </div>
                <div class="sectionContent">
                  <ng-container *ngFor="let interest of this.resume['interests']">
                    <article>
                      <ul style="list-style-type: circle; word-break: break-word;">
                        <li>
                          {{interest.interest}}
                        </li>
                      </ul>
                    </article>
                  </ng-container>
                </div>
                <div class="clear"></div>
              </section>
              <section *ngIf="this.resume.weakness.length">
                <div class="sectionTitle">
                  <h1>Weakness</h1>
                </div>
                <div class="sectionContent">
                  <ng-container *ngFor="let weakness of this.resume['weakness']">
                    <article>
                      <ul style="list-style-type: circle">
                        <li>
                          {{weakness.name}}
                        </li>
                      </ul>
                    </article>
                  </ng-container>
                </div>
                <div class="clear"></div>
              </section>
              <section *ngIf="this.resume.strengths.length">
                <div class="sectionTitle">
                  <h1>Strength</h1>
                </div>
                <div class="sectionContent">
                  <ng-container *ngFor="let strength of this.resume['strengths']">
                    <article>
                      <ul style="list-style-type: circle">
                        <li>
                          {{strength.name}}
                        </li>
                      </ul>
                    </article>
                  </ng-container>
                </div>
                <div class="clear"></div>
              </section>
              <section *ngIf="this.resume.refrences.length">
                <div class="sectionTitle">
                  <h1>Reference</h1>
                </div>
                <div class="sectionContent">
                  <ng-container *ngFor="let refrence of this.resume['refrences']">
                    <article style="margin-bottom: 4%">
                      <h3>
                        {{refrence.name}}<br>
                        {{refrence.relationship}}<br>
                        {{refrence.company}}<br>
                        {{refrence.email}}<br>
                        {{refrence.phone}}<br>
                        {{refrence.address}}
                      </h3>
                    </article>
                  </ng-container>
                </div>
                <div class="clear"></div>
              </section>
            </div>
          </div>
        </div>
        <div class="hover" fxLayout="column" fxLayoutAlign="center center" fxHide.xs>
          <div fxLayout="row" fxLayoutAlign="center center">
            <button mat-button color="primary" (click)="download()">Save
            </button>
          </div>
        </div>
        <style type="text/css">
          html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, del,
          dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset,
          form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details,
          figcaption, figure, footer, header, hgroup, menu, nav, section, summary, time, mark, audio, video {
            font: inherit;
            font-size: 100%;
            margin: 0;
            padding: 0;
            vertical-align: baseline;
          }

          article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
            display: block;
          }

          html, body {
            font-family: 'Lato', helvetica, arial, sans-serif;
            font-size: 16px;
            color: #222;
          }

          .clear {
            clear: both;
          }

          p {
            font-size: 1em;
            line-height: 1.4em;

            color: #444;
          }

          #cv {
            width: 90%;
            max-width: 800px;
            background: #f3f3f3;
            margin: 30px auto;
          }

          .mainDetails {
            padding: 25px 35px;
            border-bottom: 2px solid #cf8a05;
            background: #ededed;
          }

          #name h1 {
            font-size: 2.5em;
            font-weight: 700;
            font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
            margin-bottom: -6px;
          }

          #name h2 {
            font-size: 2em;
            margin-left: 2px;
            font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
          }

          #mainArea {
            padding: 0 40px;
          }

          #headshot {
            width: 12.5%;
            float: left;
            margin-right: 30px;
          }

          #headshot img {
            width: 100%;
            height: auto;
            -webkit-border-radius: 50px;
            border-radius: 50px;
          }

          #name {
            float: left;
          }

          #contactDetails {
            float: right;
          }

          #contactDetails ul {
            list-style-type: none;
            font-size: 0.9em;
            margin-top: 2px;
          }

          #contactDetails ul li {
            margin-bottom: 3px;
            color: #444;
          }

          #contactDetails ul li a, a[href^=tel] {
            color: #444;
            text-decoration: none;
            -webkit-transition: all .3s ease-in;
            -moz-transition: all .3s ease-in;
            -o-transition: all .3s ease-in;
            -ms-transition: all .3s ease-in;
            transition: all .3s ease-in;
          }

          #contactDetails ul li a:hover {
            color: #cf8a05;
          }

          section {
            border-top: 1px solid #dedede;
            padding: 20px 0 0px;
          }

          section:first-child {
            border-top: 0;
          }

          section:last-child {
            padding: 20px 0 10px;
          }

          .sectionTitle {
            float: left;
            width: 25%;
          }

          .sectionContent {
            float: right;
            width: 72.5%;
            margin-bottom: 20px;
          }

          .sectionTitle h1 {
            font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
            font-style: italic;
            font-size: 1.5em;
            color: #cf8a05;
          }

          .sectionContent h2 {
            font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
            font-size: 1.5em;
            margin-bottom: -2px;
          }

          .subDetails {
            font-size: 0.8em;
            font-style: italic;
            margin-bottom: 3px;
          }

          .keySkills {
            list-style-type: none;
            -moz-column-count: 3;
            -webkit-column-count: 3;
            column-count: 3;

            font-size: 1em;
            color: #444;
          }

          .keySkills ul li {
            margin-bottom: 3px;
          }

          @media all and (min-width: 602px) and (max-width: 800px) {
            #headshot {
              display: none;
            }

            .keySkills {
              -moz-column-count: 2;
              -webkit-column-count: 2;
              column-count: 2;
            }
          }

          @media all and (max-width: 601px) {
            #cv {
              width: 95%;
              min-width: 280px;
            }

            #headshot {
              display: none;
            }

            #name, #contactDetails {
              float: none;
              width: 100%;
              text-align: center;
            }

            .sectionTitle, .sectionContent {
              float: none;
              width: 100%;
            }

            .sectionTitle {
              margin-left: -2px;
              font-size: 1.25em;
            }

            .keySkills {
              -moz-column-count: 2;
              -webkit-column-count: 2;
              column-count: 2;
            }
          }

          @media all and (max-width: 480px) {
            .mainDetails {
              padding: 15px 15px;
            }

            section {
              padding: 15px 0 0;
            }

            #mainArea {
              padding: 0 25px;
            }

            .keySkills {
              -moz-column-count: 1;
              -webkit-column-count: 1;
              column-count: 1;
            }

            #name h1 {
              line-height: .8em;
              margin-bottom: 4px;
            }
          }

          @media print {
            #cv {
              width: 100%;
            }
          }

          @-webkit-keyframes reset {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 0;
            }
          }

          @-webkit-keyframes fade-in {
            0% {
              opacity: 0;
            }
            40% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          @-moz-keyframes reset {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 0;
            }
          }

          @-moz-keyframes fade-in {
            0% {
              opacity: 0;
            }
            40% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          @keyframes reset {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 0;
            }
          }

          @keyframes fade-in {
            0% {
              opacity: 0;
            }
            40% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          .instaFade {
            -webkit-animation-name: reset, fade-in;
            -webkit-animation-duration: 1.5s;
            -webkit-animation-timing-function: ease-in;

            -moz-animation-name: reset, fade-in;
            -moz-animation-duration: 1.5s;
            -moz-animation-timing-function: ease-in;

            animation-name: reset, fade-in;
            animation-duration: 1.5s;
            animation-timing-function: ease-in;
          }

          .quickFade {
            -webkit-animation-name: reset, fade-in;
            -webkit-animation-duration: 2.5s;
            -webkit-animation-timing-function: ease-in;

            -moz-animation-name: reset, fade-in;
            -moz-animation-duration: 2.5s;
            -moz-animation-timing-function: ease-in;

            animation-name: reset, fade-in;
            animation-duration: 2.5s;
            animation-timing-function: ease-in;
          }

          .delayOne {
            -webkit-animation-delay: 0, .5s;
            -moz-animation-delay: 0, .5s;
            animation-delay: 0, .5s;
          }

          .delayTwo {
            -webkit-animation-delay: 0, 1s;
            -moz-animation-delay: 0, 1s;
            animation-delay: 0, 1s;
          }

          .delayThree {
            -webkit-animation-delay: 0, 1.5s;
            -moz-animation-delay: 0, 1.5s;
            animation-delay: 0, 1.5s;
          }

          .delayFour {
            -webkit-animation-delay: 0, 2s;
            -moz-animation-delay: 0, 2s;
            animation-delay: 0, 2s;
          }

          .delayFive {
            -webkit-animation-delay: 0, 2.5s;
            -moz-animation-delay: 0, 2.5s;
            animation-delay: 0, 2.5s;
          }
        </style>
      </mat-card>
    </div>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css?family=Rokkitt');

    mat-card {
      width: 8in;
      margin-top: 1%;
      box-shadow: 1px 1px 8px 8px rgba(0, 0, 0, 0.2) !important;
      margin-bottom: 1%;
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
  `]
})
export class RoyalTemplateComponent {
  @Input() resume: Resume;
  @Output() downloadTemplate = new EventEmitter<string>();


  constructor() {
  }

  download() {
    const innterHtml = document.getElementById('html').innerHTML;
    const html = `<html>
<head>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link href='http://fonts.googleapis.com/css?family=Rokkitt:400,700|Lato:400,300' rel='stylesheet' type='text/css'>
 <style type="text/css">
          html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, del,
          dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset,
          form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details,
          figcaption, figure, footer, header, hgroup, menu, nav, section, summary, time, mark, audio, video {
            font: inherit;
            font-size: 100%;
            margin: 0;
            padding: 0;
            vertical-align: baseline;
          }

          article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
            display: block;
          }

          html, body {
            font-family: 'Lato', helvetica, arial, sans-serif;
            font-size: 16px;
            color: #222;
          }

          .clear {
            clear: both;
          }

          p {
            font-size: 1em;
            line-height: 1.4em;

            color: #444;
          }

          #cv {
            width: 90%;
            max-width: 800px;
            background: #f3f3f3;
            margin: 30px auto;
          }

          .mainDetails {
            padding: 25px 35px;
            border-bottom: 2px solid #cf8a05;
            background: #ededed;
          }

          #name h1 {
            font-size: 2.5em;
            font-weight: 700;
            font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
            margin-bottom: -6px;
          }

          #name h2 {
            font-size: 2em;
            margin-left: 2px;
            font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
          }

          #mainArea {
            padding: 0 40px;
          }

          #headshot {
            width: 12.5%;
            float: left;
            margin-right: 30px;
          }

          #headshot img {
            width: 100%;
            height: auto;
            -webkit-border-radius: 50px;
            border-radius: 50px;
          }

          #name {
            float: left;
          }

          #contactDetails {
            float: right;
          }

          #contactDetails ul {
            list-style-type: none;
            font-size: 0.9em;
            margin-top: 2px;
          }

          #contactDetails ul li {
            margin-bottom: 3px;
            color: #444;
          }

          #contactDetails ul li a, a[href^=tel] {
            color: #444;
            text-decoration: none;
            -webkit-transition: all .3s ease-in;
            -moz-transition: all .3s ease-in;
            -o-transition: all .3s ease-in;
            -ms-transition: all .3s ease-in;
            transition: all .3s ease-in;
          }

          #contactDetails ul li a:hover {
            color: #cf8a05;
          }

          section {
            border-top: 1px solid #dedede;
            padding: 20px 0 0px;
          }

          section:first-child {
            border-top: 0;
          }

          section:last-child {
            padding: 20px 0 10px;
          }

          .sectionTitle {
            float: left;
            width: 25%;
          }

          .sectionContent {
            float: right;
            width: 72.5%;
            margin-bottom: 20px;
          }

          .sectionTitle h1 {
            font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
            font-style: italic;
            font-size: 1.5em;
            color: #cf8a05;
          }

          .sectionContent h2 {
            font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
            font-size: 1.5em;
            margin-bottom: -2px;
          }

          .subDetails {
            font-size: 0.8em;
            font-style: italic;
            margin-bottom: 3px;
          }

          .keySkills {
            list-style-type: none;
            -moz-column-count: 3;
            -webkit-column-count: 3;
            column-count: 3;

            font-size: 1em;
            color: #444;
          }

          .keySkills ul li {
            margin-bottom: 3px;
          }

          @media all and (min-width: 602px) and (max-width: 800px) {
            #headshot {
              display: none;
            }

            .keySkills {
              -moz-column-count: 2;
              -webkit-column-count: 2;
              column-count: 2;
            }
          }

          @media all and (max-width: 601px) {
            #cv {
              width: 95%;
              min-width: 280px;
            }

            #headshot {
              display: none;
            }

            #name, #contactDetails {
              float: none;
              width: 100%;
              text-align: center;
            }

            .sectionTitle, .sectionContent {
              float: none;
              width: 100%;
            }

            .sectionTitle {
              margin-left: -2px;
              font-size: 1.25em;
            }

            .keySkills {
              -moz-column-count: 2;
              -webkit-column-count: 2;
              column-count: 2;
            }
          }

          @media all and (max-width: 480px) {
            .mainDetails {
              padding: 15px 15px;
            }

            section {
              padding: 15px 0 0;
            }

            #mainArea {
              padding: 0 25px;
            }

            .keySkills {
              -moz-column-count: 1;
              -webkit-column-count: 1;
              column-count: 1;
            }

            #name h1 {
              line-height: .8em;
              margin-bottom: 4px;
            }
          }

          @media print {
            #cv {
              width: 100%;
            }
          }
        </style>
        <body>
${innterHtml}
</body>
</head>
</html>`;
    this.downloadTemplate.emit(html);
  }
}
