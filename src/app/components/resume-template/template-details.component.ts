import {AfterContentInit, Component, Input} from '@angular/core';
import {Resume} from '../../models/resume';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-template-details',
  template: `
    <div class="main-container" fxLayout="column" fxLayoutGap="30px">
      <iframe *ngIf="!!this.videoUrl" [src]="this.videoUrl"
              width="700px" height="400px"></iframe>
      <ng-container *ngTemplateOutlet="educationTemplate"></ng-container>
      <ng-container *ngTemplateOutlet="experienceTemplate"></ng-container>
      <ng-container *ngTemplateOutlet="interestTemplate"></ng-container>
      <ng-container *ngTemplateOutlet="industrialExposureTemplate"></ng-container>
      <ng-container *ngTemplateOutlet="awardsTemplate"></ng-container>
      <ng-container *ngTemplateOutlet="objectiveTemplate"></ng-container>
      <ng-container *ngTemplateOutlet="referenceTemplate"></ng-container>
      <ng-container *ngTemplateOutlet="projectDetailTemplate"></ng-container>
    </div>
    <ng-template #educationTemplate>
      <mat-card *ngIf="this.resume.education.length" fxLayout="column">
        <mat-card-header>
          <div fxLayout="row" fxLayoutAlign="start center"
               fxLayoutGap="30px">
            <mat-icon>school</mat-icon>
            <p>Education</p>
          </div>
        </mat-card-header>
        <mat-card-content>
          <div fxLayout="column" fxLayoutGap="20px" class="card-container ">
            <app-template-education *ngFor="let education of this.resume.education"
                                    [education]="education"></app-template-education>
          </div>
        </mat-card-content>
      </mat-card>
    </ng-template>
    <ng-template #experienceTemplate>
      <mat-card *ngIf="this.resume.employment_history.length" fxLayout="column">
        <mat-card-header>
          <div fxLayout="row" fxLayoutAlign="start center"
               fxLayoutGap="30px">
            <mat-icon>stars</mat-icon>
            <p>Experience</p>
          </div>
        </mat-card-header>
        <mat-card-content>
          <div fxLayout="column" fxLayoutGap="20px" class="card-container ">
            <app-template-employment-history *ngFor="let data of this.resume.employment_history"
                                             [employmentHistory]="data"></app-template-employment-history>
          </div>
        </mat-card-content>
      </mat-card>
    </ng-template>

    <ng-template #interestTemplate>
      <mat-card *ngIf="this.resume.interests.length" fxLayout="column">
        <mat-card-header>
          <div fxLayout="row" fxLayoutAlign="start center"
               fxLayoutGap="30px">
            <mat-icon>flight_land</mat-icon>
            <p>Interest</p>
          </div>
        </mat-card-header>
        <mat-card-content>
          <div fxLayout="column" fxLayoutGap="20px" class="card-container ">
            <app-template-interest *ngFor="let data of this.resume.interests"
                                   [interest]="data"></app-template-interest>
          </div>
        </mat-card-content>
      </mat-card>
    </ng-template>
    <ng-template #industrialExposureTemplate>
      <mat-card *ngIf="this.resume.industrialExposures.length" fxLayout="column">
        <mat-card-header>
          <div fxLayout="row" fxLayoutAlign="start center"
               fxLayoutGap="30px">
            <mat-icon>build_circle</mat-icon>
            <p>Industrial Exposure</p>
          </div>
        </mat-card-header>
        <mat-card-content>
          <div fxLayout="column" fxLayoutGap="20px" class="card-container ">
            <app-template-industrial-exposure *ngFor="let data of this.resume.industrialExposures"
                                              [industrialExposure]="data"></app-template-industrial-exposure>
          </div>
        </mat-card-content>
      </mat-card>
    </ng-template>
    <ng-template #awardsTemplate>
      <mat-card *ngIf="this.resume.award_achivements.length" fxLayout="column">
        <mat-card-header>
          <div fxLayout="row" fxLayoutAlign="start center"
               fxLayoutGap="30px">
            <mat-icon>emoji_events</mat-icon>
            <p>Awards & Achievements</p>
          </div>
        </mat-card-header>
        <mat-card-content>
          <div fxLayout="column" fxLayoutGap="20px" class="card-container ">
            <app-template-awards *ngFor="let data of this.resume.award_achivements"
                                 [award]="data"></app-template-awards>
          </div>
        </mat-card-content>
      </mat-card>
    </ng-template>
    <ng-template #objectiveTemplate>
      <mat-card *ngIf="this.resume.objectives.length" fxLayout="column">
        <mat-card-header>
          <div fxLayout="row" fxLayoutAlign="start center"
               fxLayoutGap="30px">
            <mat-icon>emoji_objects</mat-icon>
            <p>Objectives</p>
          </div>
        </mat-card-header>
        <mat-card-content>
          <div fxLayout="column" fxLayoutGap="20px" class="card-container ">
            <app-template-objective *ngFor="let data of this.resume.objectives"
                                    [objective]="data"></app-template-objective>
          </div>
        </mat-card-content>
      </mat-card>
    </ng-template>
    <ng-template #referenceTemplate>
      <mat-card *ngIf="this.resume.refrences.length" fxLayout="column">
        <mat-card-header>
          <div fxLayout="row" fxLayoutAlign="start center"
               fxLayoutGap="30px">
            <mat-icon>groups</mat-icon>
            <p>Reference</p>
          </div>
        </mat-card-header>
        <mat-card-content>
          <div fxLayout="column" fxLayoutGap="20px" class="card-container ">
            <app-template-reference *ngFor="let data of this.resume.refrences"
                                    [reference]="data"></app-template-reference>
          </div>
        </mat-card-content>
      </mat-card>
    </ng-template>
    <ng-template #projectDetailTemplate>
      <mat-card *ngIf="this.resume.projectDetails.length" fxLayout="column">
        <mat-card-header>
          <div fxLayout="row" fxLayoutAlign="start center"
               fxLayoutGap="30px">
            <mat-icon>create_new_folder</mat-icon>
            <p>Project Details</p>
          </div>
        </mat-card-header>
        <mat-card-content>
          <div fxLayout="column" fxLayoutGap="20px" class="card-container ">
            <app-template-project-detail *ngFor="let data of this.resume.projectDetails"
                                         [projectDetail]="data"></app-template-project-detail>
          </div>
        </mat-card-content>
      </mat-card>
    </ng-template>
  `,
  styles: [`
    .main-container {
      width: 100%;
      margin-bottom: 1.5rem;
      margin-top: 1.5rem;
    }

    .card-container {
      padding-left: 6rem;
    }

    mat-icon {
      font-size: 2.5rem;
    }

    p, mat-icon {
      color: #a85f46;
    }

    p {
      text-transform: uppercase;
      font-size: 2rem;
      margin-top: 1.2rem;
    }
  `]
})

export class TemplateDetailsComponent implements AfterContentInit {
  @Input() resume: Resume;
  videoUrl: any = '';

  constructor(private domSanatizer: DomSanitizer) {
  }

  ngAfterContentInit() {
    if (this.resume.video_url) {
      const id = this.resume.video_url.split('v=')[1];
      const url = 'https://www.youtube.com/embed/' + id;
      this.videoUrl = this.domSanatizer
        .bypassSecurityTrustResourceUrl(url);
    }
  }
}
