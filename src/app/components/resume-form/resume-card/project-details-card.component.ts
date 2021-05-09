import {Component, Input} from '@angular/core';
import {ProjectDetail} from '../../../models/project-detail';
import {MatDialog} from '@angular/material/dialog';
import {ApiService} from '../../../services/api-service';
import {AlertService} from '../../../services/alert-service';
import {ProjectDetailsFormComponent} from '../resume-dialogues/project-details-form.component';
import {ResumeRepository} from '../../../repository/resume-repository';

@Component({
  selector: 'app-project-details-card',
  template: `
    <div style="position: relative;margin-bottom: 1rem;" fxLayoutAlign="center center" fxLayout="column">
      <div class="cards-outer-div" fxLayout="column" fxLayoutAlign="center center">
        <ng-container>
          <h3 class="resume-form-info-card-heading">{{this.projectDetail.description}}</h3>
          <h3 class="resume-form-info-card-heading">{{this.projectDetail.title}}</h3>
          <p class="resume-form-info-card-heading">{{this.projectDetail.role}}</p>
          <p class="resume-form-info-card-heading">{{this.projectDetail.duration}}</p>
        </ng-container>
        <div fxLayoutAlign="center center">
          <div class="hover-container">
            <div class="hover">
              <button (click)="edit()" class="resume-form-mat-icon-button" mat-icon-button>
                <mat-icon class="resume-form-mat-icon">create</mat-icon>
              </button>
              <button (click)="delete()" class="resume-form-mat-icon-button" mat-icon-button>
                <mat-icon class="resume-form-mat-icon">delete</mat-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [``]
})

export class ProjectDetailsCardComponent {
  @Input() projectDetail: ProjectDetail;
  @Input() resumeId: string;

  constructor(private matDialog: MatDialog, private resumeRepo: ResumeRepository, private alertService: AlertService) {
  }

  edit() {
    this.matDialog.open(ProjectDetailsFormComponent, {
      width: '90%', height: '90%', data: {projectDetail: this.projectDetail, resumeId: this.resumeId}
    });
  }

  delete() {
    this.resumeRepo.deleteProjectDetail(this.resumeId, this.projectDetail._id)
      .subscribe(data => {
        this.alertService.success('Project Details deleted Successfully');
      });
  }
}
