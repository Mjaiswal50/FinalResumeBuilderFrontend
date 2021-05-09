import {Component, Input} from '@angular/core';
import {EmploymentHistory} from '../../../models/employment-history';
import {MatDialog} from '@angular/material/dialog';
import {EmploymentHistoryFormComponent} from '../resume-dialogues/employment-history-form.component';
import {ApiService} from '../../../services/api-service';
import {AlertService} from '../../../services/alert-service';
import {ResumeRepository} from '../../../repository/resume-repository';

@Component({
  selector: 'app-employment-history-card',
  template: `
    <div style="position: relative" fxLayoutAlign="center center" fxLayout="column">
      <div class="cards-outer-div" fxLayoutAlign="center center" fxLayout="column">
        <ng-container>
          <h3 class="resume-form-info-card-heading">{{employmentHistory.employer}}</h3>
          <h3 class="resume-form-info-card-heading">{{employmentHistory.organisation}}</h3>
          <p class="resume-form-info-card-heading">{{employmentHistory.designation}}</p>
          <p class="resume-form-info-card-heading">{{employmentHistory.city}}</p>
        </ng-container>
        <div fxLayout="row" fxLayoutAlign="center center" fxHide.xs>
          <div class="hover-container">
            <div class="hover">
              <button class="resume-form-mat-icon-button" (click)="edit()" mat-icon-button>
                <mat-icon class="resume-form-mat-icon">create</mat-icon>
              </button>
              <button class="resume-form-mat-icon-button" (click)="delete()" mat-icon-button>
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

export class EmploymentHistoryCardComponent {
  @Input() employmentHistory: EmploymentHistory;
  @Input() resumeId: string;

  constructor(private dialog: MatDialog, private resumeRepo: ResumeRepository, private alertService: AlertService) {
  }

  edit() {
    const dialogRef = this.dialog.open(EmploymentHistoryFormComponent, {
      disableClose: true,
      data: {employmentHistory: this.employmentHistory, resumeId: this.resumeId}
    });
    dialogRef.updateSize('90%', '90%');
  }

  delete() {
    this.resumeRepo.deleteEmploymentHistory(this.employmentHistory._id, this.resumeId)
      .subscribe(data => {
        this.alertService.success('Employment History deleted Successfully');
      });
  }
}
