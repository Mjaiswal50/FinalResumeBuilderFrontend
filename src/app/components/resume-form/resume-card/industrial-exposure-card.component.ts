import {Component, Input} from '@angular/core';
import {IndustrialExposure} from '../../../models/industrial-exposure';
import {MatDialog} from '@angular/material/dialog';
import {ApiService} from '../../../services/api-service';
import {AlertService} from '../../../services/alert-service';
import {IndustrialExposureFormComponent} from '../resume-dialogues/industrial-exposure-form.component';
import {ResumeRepository} from '../../../repository/resume-repository';

@Component({
  selector: 'app-industrial-exposure-card',
  template: `
    <div style="position: relative" fxLayoutAlign="center center" fxLayout="column">
      <div class="cards-outer-div" fxLayoutAlign="center center" fxLayout="column">
        <ng-container>
          <h3 class="resume-form-info-card-heading"
              *ngIf="industrialExposure.end_month">  {{industrialExposure.start_month}} {{industrialExposure.start_year}} -
            {{industrialExposure.end_month}} {{industrialExposure.end_year}}</h3>
          <h3 class="resume-form-info-card-heading"
              *ngIf="!industrialExposure.end_month"> {{industrialExposure.start_month}} {{industrialExposure.start_year}} - Present</h3>
          <p class="resume-form-info-card-heading"> {{industrialExposure.city}}, {{industrialExposure.state}}</p>
          <p class="resume-form-info-card-heading">{{industrialExposure.work}}</p>
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

export class IndustrialExposureCardComponent {
  @Input() industrialExposure: IndustrialExposure;
  @Input() resumeId: string;

  constructor(private dialog: MatDialog, private resumeRepo: ResumeRepository, private alertService: AlertService) {
  }

  edit() {
    const dialogRef = this.dialog.open(IndustrialExposureFormComponent, {
      disableClose: true,
      data: {industrialExposure: this.industrialExposure, resumeId: this.resumeId}
    });
    dialogRef.updateSize('90%', '90%');
  }

  delete() {
    this.resumeRepo.deleteIndustrialExposure(this.resumeId, this.industrialExposure._id)
      .subscribe(data => {
        this.alertService.success('industrialExposure deleted Successfully');
      });
  }
}
