import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Resume} from '../../models/resume';
import {ActivatedRoute, Router} from '@angular/router';
import {ResumeRepository} from '../../repository/resume-repository';
import {filter, map, switchMap, takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-upload',
  template: `
    <div fxLayout="column" fxLayoutAlign="start center">
      <mat-tab-group mat-align-tabs="center" style="width: 100%" dynamicHeight color="primary" backgroundColor="accent">
        <mat-tab label="UPLOAD PROFILE IMAGE">
          <app-upload-image [resume]="resume"></app-upload-image>
        </mat-tab>
        <mat-tab label="PASTE YOUTUBE LINK">
          <app-import-youtube [resume]="resume"></app-import-youtube>
        </mat-tab>
      </mat-tab-group>
    </div>
  `,
  styles: [`
  `]
})

export class UploadComponent implements OnInit, OnDestroy {
  resume: Resume;
  isAlive = true;
  loading = false;

  constructor(private route: ActivatedRoute, private resumeRepo: ResumeRepository) {
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
