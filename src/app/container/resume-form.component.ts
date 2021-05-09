import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Resume} from '../models/resume';
import {ResumeRepository} from '../repository/resume-repository';
import {ActivatedRoute} from '@angular/router';
import {filter, map, switchMap, takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-resume-form',
  template: `
    <mat-accordion *ngIf="!this.loading" fxLayout="column" fxLayoutAlign="center center">
      <h1 class="tabs-heading res-expansion-title">Enter details which you want to see on your Resume</h1>
      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <mat-panel-title>
            Contact Details
          </mat-panel-title>
          <mat-panel-description>
            Enter your Contact Details
          </mat-panel-description>
        </mat-expansion-panel-header>
        <app-contact-details [resumeId]="resume._id" [contactDetails]="resume.contact_details"></app-contact-details>
      </mat-expansion-panel>
      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <mat-panel-title>
            Education
          </mat-panel-title>
          <mat-panel-description>
            Enter your Qualification
          </mat-panel-description>
        </mat-expansion-panel-header>
        <app-education [resumeId]="resume._id" [educations]="resume.education"></app-education>
      </mat-expansion-panel>
      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <mat-panel-title>Employment History</mat-panel-title>
          <mat-panel-description>
            Enter Your Work Experience
          </mat-panel-description>
        </mat-expansion-panel-header>
        <app-employment-history [resumeId]="resume._id" [employmentHistories]="resume.employment_history"></app-employment-history>
      </mat-expansion-panel>
      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <mat-panel-title>Hobbies & Interests</mat-panel-title>
          <mat-panel-description>
            Describe your hobbies and interest in detail
          </mat-panel-description>
        </mat-expansion-panel-header>
        <app-interest [resumeId]="this.resume._id" [interests]="resume.interests"></app-interest>
      </mat-expansion-panel>
      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <mat-panel-title>Professional Skills</mat-panel-title>
          <mat-panel-description>
            Describe your Skills
          </mat-panel-description>
        </mat-expansion-panel-header>
        <app-skills [skills]="resume.skills" [resumeId]="resume._id"></app-skills>
      </mat-expansion-panel>
      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <mat-panel-title>Languages</mat-panel-title>
          <mat-panel-description>
            Describe your known Languages
          </mat-panel-description>
        </mat-expansion-panel-header>
        <app-language [resumeId]="resume._id" [languages]="resume.languages"></app-language>
      </mat-expansion-panel>
      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <mat-panel-title>Industrial Exposure as an Intern</mat-panel-title>
          <mat-panel-description>
            Describe about your Industrial Exposure as an Intern
          </mat-panel-description>
        </mat-expansion-panel-header>
        <app-industrial-exposure [resumeId]="resume._id" [industrialExposures]="resume.industrialExposures"></app-industrial-exposure>
      </mat-expansion-panel>
      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <mat-panel-title>Awards and Achievement</mat-panel-title>
          <mat-panel-description>
            Describe about your Awards and achievements
          </mat-panel-description>
        </mat-expansion-panel-header>
        <app-award [resumeId]="resume._id" [awards]="resume.award_achivements"></app-award>
      </mat-expansion-panel>
      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <mat-panel-title>Objectives</mat-panel-title>
          <mat-panel-description>
            Describe about your Objectives
          </mat-panel-description>
        </mat-expansion-panel-header>
        <app-objective [resumeId]="resume._id" [objectives]="resume.objectives"></app-objective>
      </mat-expansion-panel>
      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <mat-panel-title>Reference</mat-panel-title>
          <mat-panel-description>
            Describe about your Reference
          </mat-panel-description>
        </mat-expansion-panel-header>
        <app-reference [resumeId]="resume._id" [references]="resume.refrences"></app-reference>
      </mat-expansion-panel>
      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <mat-panel-title>Project Details</mat-panel-title>
          <mat-panel-description>
            Add your Project Details
          </mat-panel-description>
        </mat-expansion-panel-header>
        <app-project-details [resumeId]="resume._id" [projectDetails]="resume.projectDetails"></app-project-details>
      </mat-expansion-panel>
      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <mat-panel-title>Strength</mat-panel-title>
          <mat-panel-description>
            Add your Strengths
          </mat-panel-description>
        </mat-expansion-panel-header>
        <app-strength [resumeId]="resume._id" [strength]="resume.strengths"></app-strength>
      </mat-expansion-panel>
      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <mat-panel-title>Weakness</mat-panel-title>
          <mat-panel-description>
            Add your Weakness
          </mat-panel-description>
        </mat-expansion-panel-header>
        <app-weakness [resumeId]="resume._id" [weaknesses]="resume.weakness"></app-weakness>
      </mat-expansion-panel>
    </mat-accordion>
    <mat-spinner *ngIf="this.loading" color="accent" diameter="40"></mat-spinner>
  `,
  styles: [`
    h1 {
      text-align: center;
      margin-top: 2%;
      margin-bottom: 3%;
    }

    mat-expansion-panel {
      width: 90%;
    }


  `]
})

export class ResumeFormComponent implements OnInit, OnDestroy {
  resume: Resume;
  isAlive = true;
  loading = false;

  constructor(private resumeRepo: ResumeRepository, private route: ActivatedRoute) {
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  ngOnInit() {
    this.loading = true;
    const param$ = this.route.params;
    param$.pipe(takeWhile(() => this.isAlive), map(res => res.id)).subscribe(param => {
      if (!param) {
        const observer$ = this.resumeRepo.fetchAllResumes();
        const resume$ = observer$[2];
        resume$.pipe(takeWhile(() => this.isAlive))
          .subscribe((data) => {
            console.log(data);
            this.loading = false;
            this.resume = data[0];
          });
      } else {
        const resume$ = this.route.params.pipe(takeWhile(() => this.isAlive),
          map(res => res.id), switchMap((id) => {
            return this.resumeRepo.getResumeById(id);
          }), filter(res => !!res));
        resume$.subscribe(data => {
          this.resume = data;
          this.loading = false;
        });
      }
    });
  }
}

