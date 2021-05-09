import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {filter, map, switchMap, takeWhile} from 'rxjs/operators';
import {Resume} from '../models/resume';
import {ResumeRepository} from '../repository/resume-repository';
import {TemplateType} from '../utility/utility';
import {HttpService} from '../services/http-service';

@Component({
  selector: 'app-single-template',
  template: `
    <app-blues-template (downloadTemplate)="downloadTemplate($event)" [resume]="resume"
                        *ngIf="templateId == this.templateType.BLUES_TEMPLATE">
    </app-blues-template>
    <app-classic-template (downloadTemplate)="downloadTemplate($event)" [resume]="resume"
                          *ngIf="templateId == this.templateType.CLASSIC_TEMPLATE">
    </app-classic-template>
    <app-modern-template (downloadTemplate)="downloadTemplate($event)" [resume]="resume"
                         *ngIf="templateId == this.templateType.MODERN_TEMPLATE">
    </app-modern-template>
    <app-royal-template (downloadTemplate)="downloadTemplate($event)" [resume]="resume"
                        *ngIf="templateId == this.templateType.ROYAL_TEMPLATE">
    </app-royal-template>
    <app-traditional-template (downloadTemplate)="downloadTemplate($event)" [resume]="resume"
                              *ngIf="templateId == this.templateType.TRADITIONAL_TEMPLATE">
    </app-traditional-template>
  `,
  styles: [`
  `]
})

export class SingleTemplateComponent implements OnInit, OnDestroy {
  resume: Resume;
  templateId;
  loading = false;
  isAlive = true;
  templateType = TemplateType;

  constructor(private route: ActivatedRoute,
              private resumeRepo: ResumeRepository, private httpService: HttpService) {
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  ngOnInit() {
    this.fetchResume();
    const templateId = this.route.params.pipe(takeWhile(() => this.isAlive), map((data) => data.templateId));
    templateId.subscribe(data => {
      this.templateId = data;
    });
  }

  fetchResume() {
    const resume$ = this.route.params.pipe(takeWhile(() => this.isAlive),
      map((data) => data.id), switchMap(id => {
        return this.resumeRepo.getResumeById(id);
      }), filter((res) => !!res));
    resume$.subscribe(data => {
      this.resume = data;
    });
  }

  downloadTemplate(html) {
    const data = {
      html
    };
    this.httpService.post('/resume/add/pdf', data,
      true).pipe(takeWhile(() => this.isAlive)).subscribe(res => {
      const blob = new Blob([res], {type: 'application/pdf'});
      const file = URL.createObjectURL(blob);
      window.open(file);
    });
  }
}
