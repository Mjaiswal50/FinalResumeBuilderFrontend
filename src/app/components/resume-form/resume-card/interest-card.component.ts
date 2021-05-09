import {Component, Input} from '@angular/core';
import {Interest} from '../../../models/interest';
import {MatDialog} from '@angular/material/dialog';
import {InterestFormComponent} from '../resume-dialogues/interest-form.component';
import {ApiService} from '../../../services/api-service';
import {AlertService} from '../../../services/alert-service';
import {ResumeRepository} from '../../../repository/resume-repository';

@Component({
  selector: 'app-interest-card',
  template: `
    <div style="position: relative" fxLayoutAlign="center center" fxLayout="column">
      <div style="height: 7rem" class="cards-outer-div" fxLayoutAlign="center center" fxLayout="column">
        <ng-container>
          <h3 class="resume-form-info-card-heading">{{interest.interest | truncate}}</h3>
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

export class InterestCardComponent {
  @Input() interest: Interest;
  @Input() resumeId: string;

  constructor(private matDialog: MatDialog, private resumeRepo: ResumeRepository, private alertService: AlertService) {
  }

  edit() {
    this.matDialog.open(InterestFormComponent, {
      width: '90%', height: '90%', data: {interest: this.interest, resumeId: this.resumeId}
    });
  }

  delete() {
    this.resumeRepo.deleteInterest(this.resumeId, this.interest._id)
      .subscribe(data => {
        this.alertService.success('Interest deleted Successfully');
      });
  }
}
