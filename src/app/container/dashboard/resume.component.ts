import {Component, OnDestroy, OnInit} from '@angular/core';
import {Resume} from '../../models/resume';
import {ResumeRepository} from '../../repository/resume-repository';
import {MatDialog} from '@angular/material/dialog';
import {AddOrEditResumeComponent} from '../../components/dialogues/add-or-edit-resume.component';

@Component({
  selector: 'app-resume',
  template: `
    <div *ngIf="!loading && !error" style="margin-top: 2rem;margin-left: 2rem;" fxLayout="column"
         fxLayoutAlign="center stretch"
         fxLayoutGap="20px">
      <div fxLayout="row wrap"
           fxLayoutAlign="start center" fxLayoutGap="30px">
        <mat-card (click)="addResume()" class="add-card" fxLayout="column" fxLayoutAlign="center center" fxLayoutGap="30px" matRipple>
          <mat-icon>add_box</mat-icon>
          <mat-card-title style="color: #538ec3;">Add Resume</mat-card-title>
        </mat-card>
        <app-resume-card *ngFor="let resume of resumeList"
                         [resume]="resume"></app-resume-card>

      </div>
    </div>
    <div *ngIf="loading" style="height: 100vh" fxFlex="100%" fxLayoutAlign="center center">
      <mat-spinner></mat-spinner>
    </div>
  `,
  styles: [`
    .add-card {
      width: 250px;
      text-transform: uppercase;
      box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);
      height: 271px;
      margin-bottom: 1rem;
    }

    span {
      height: 255px;
      width: 250px;
    }

    mat-icon {
      font-size: 2.5rem;
      color: #538ec3
    }
  `]
})

export class ResumeComponent implements OnInit, OnDestroy {
  hover = false;
  resumeList: Resume[] = [];
  isAlive = true;
  loading = false;
  error = false;

  constructor(private resumeRepo: ResumeRepository, private matDialog: MatDialog) {
  }

  ngOnInit() {
    this.fetchData();
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  fetchData() {
    const observer$ = this.resumeRepo.fetchAllResumes();
    observer$[2].subscribe(resumes => {
      this.resumeList = resumes;
    });
    observer$[0].subscribe(loading => {
      this.loading = loading;
    });
  }

  addResume() {
    this.matDialog.open(AddOrEditResumeComponent, {
      height: '20%',
      width: '50%'
    });
  }
}
