import {Component, OnDestroy, OnInit} from '@angular/core';
import {Resume} from '../../models/resume';
import {ApiService} from '../../services/api-service';
import {ResumeRepository} from '../../repository/resume-repository';
import {takeWhile} from 'rxjs/operators';
import {Router} from '@angular/router';
///update/onboarding
//hard problem on line 12
@Component({
  selector: 'app-on-boarding',
  template: `
    <mat-horizontal-stepper *ngIf="!this.loading">
      <mat-step>
        <ng-template matStepLabel>Name your Resume</ng-template>
        <app-resume-name [isCompleted]="isFirstStepCompleted"></app-resume-name>
      </mat-step>
      <mat-step *ngIf="this.isFirstStepCompleted" optional>
        <ng-template matStepLabel>Upload Video & Image</ng-template>
        <app-upload></app-upload>
      </mat-step>
      <mat-step>
        <ng-template matStepLabel>Resume Form</ng-template>
        <app-resume-form></app-resume-form>
        <div fxLayout="column" fxLayoutAlign="center center" fxFlex="100%">
          <button (click)="finish()" style="margin-top: 1rem" mat-raised-button color="accent">Finish</button>
        </div>
      </mat-step>
    </mat-horizontal-stepper>
    <div *ngIf="this.loading" style="height: 100vh" fxLayout="column" fxLayoutAlign="center center">
      <mat-spinner></mat-spinner>
    </div>
  `,
  styles: [``]
})

export class OnBoardingComponent implements OnInit, OnDestroy {
  resume: Resume;
  isFirstStepCompleted = false;
  loading = true;
  isAlive = true;

  constructor(private resumeRepo: ResumeRepository, private router: Router) {
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  ngOnInit() {
    const observer$ = this.resumeRepo.fetchAllResumes();
    const resume$ = observer$[2];
    resume$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
      if (data.length) {
        this.resume = data[0];
        this.isFirstStepCompleted = true;
        this.loading = false;
      }
    });
  }

  finish() {
    this.resumeRepo.updateOnBoarding({onboarding: 200}).subscribe(data => {
      this.router.navigate(['dashboard']);
    });
  }
}
