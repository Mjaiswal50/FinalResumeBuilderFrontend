import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Resume} from '../models/resume';
import {ResumeRepository} from '../repository/resume-repository';
import {filter, map, switchMap, takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-single-resume',
  template: `
    <div class="main-div" fxLayout="{{this.isLeftPanelEnabled ? 'row': 'column'}}"
         fxLayout.xs="column"
         fxLayoutAlign="{{this.isLeftPanelEnabled ? 'start start':'center center'}}"
         fxLayoutGap="50px" *ngIf="this.resume">
      <mat-card class="sidebar" *ngIf="this.isLeftPanelEnabled">
        <div
          fxLayout="column" fxLayoutGap="20px">
          <button matTooltip="Views: {{this.resume.views}}" style="background: #f1c232;" mat-mini-fab
                  *ngIf="this.resume && this.isPreview && this.resume.contact_details ">
            <mat-icon style="color: black">remove_red_eye</mat-icon>
          </button>
          <app-template-contact-detail [resume]="resume">
          </app-template-contact-detail>
        </div>
      </mat-card>
      <app-template-buttons [isLeftPanelEnabled]="isLeftPanelEnabled"
                            *ngIf="!isLeftPanelEnabled" [resumeId]="resume._id"></app-template-buttons>
      <app-template-details [resume]="resume"></app-template-details>
    </div>
  `,
  styles: [`

    .main-div {
      width: 100vw;
      height: 100vh;
    }

    .sidebar {
      background: #538EC3;
      margin-left: 12rem;
      width: 300px;
      height: auto;
      box-shadow: 1px 1px 10px 10px rgba(0, 0, 0, 0.3) !important;
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }
  `]
})

export class SingleResumeComponent implements OnInit, OnDestroy {
  resume: Resume;
  loading = false;
  isAlive = true;
  isPreview = false;
  imageUrl = '';
  isLeftPanelEnabled = false;

  constructor(private route: ActivatedRoute,
              private router: Router, private resumeRepo: ResumeRepository) {
    document.body.style.backgroundImage = 'url("../../assets/back.jpg")';
  }

  ngOnInit() {
    this.isPreview = this.router.url.includes('preview');
    const resume$ = this.route.params.pipe(
      takeWhile(() => this.isAlive),
      map(data => data.id), switchMap(id => {
        return this.resumeRepo.getResumeById(id);
      }), filter(res => !!res));
    resume$.subscribe(data => {
      this.resume = data;
      this.isLeftPanelEnabled = !!(this.resume.contact_details || this.resume.skills.length ||
        this.resume.weakness.length || this.resume.languages.length || this.resume.strengths.length);
    });
  }

  ngOnDestroy() {
    this.isAlive = false;
    document.body.style.backgroundImage = '';
  }
}
