import {Component, Input} from '@angular/core';
import {Education} from '../../../models/education';
import {ApiService} from '../../../services/api-service';
import {AlertService} from '../../../services/alert-service';
import {MatDialog} from '@angular/material/dialog';
import {EducationFormComponent} from '../resume-dialogues/education-form.component';
import {ResumeRepository} from '../../../repository/resume-repository';

@Component({
  selector: 'app-education-card',
  template: `
    <div style="position: relative;margin-bottom: 1rem;" fxLayoutAlign="center center" fxLayout="column">
      <div class="cards-outer-div" fxLayout="column" fxLayoutAlign="center center">
        <ng-container>
          <h3 class="resume-form-info-card-heading">{{education.field}}</h3>
          <h3 class="resume-form-info-card-heading">{{education.degree_type}}</h3>
          <p class="resume-form-info-card-heading">{{education.city}}</p>
          <p class="resume-form-info-card-heading">{{education.school_name}}</p>
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

export class EducationCardComponent {
  @Input() education: Education;
  @Input() resumeId: string;

  constructor(private matDialog: MatDialog, private resumeRepo: ResumeRepository, private alertService: AlertService) {
  }

  edit() {
    this.matDialog.open(EducationFormComponent, {
      width: '90%', height: '90%', data: {education: this.education, resumeId: this.resumeId}
    });
  }

  delete() {
    this.resumeRepo.deleteEducation(this.resumeId, this.education._id)
      .subscribe(data => {
        this.alertService.success('education deleted Successfully');
      });
  }
}
