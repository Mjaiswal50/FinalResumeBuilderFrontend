import {Component, Input} from '@angular/core';
import {Refrence} from '../../../models/refrence';
import {MatDialog} from '@angular/material/dialog';
import {ApiService} from '../../../services/api-service';
import {AlertService} from '../../../services/alert-service';
import {ReferenceFormComponent} from '../resume-dialogues/reference-form.component';
import {ResumeRepository} from '../../../repository/resume-repository';

@Component({
  selector: 'app-reference-card',
  template: `
    <div style="position: relative;margin-bottom: 1rem;" fxLayoutAlign="center center" fxLayout="column">
      <div class="cards-outer-div" fxLayout="column" fxLayoutAlign="center center">
        <ng-container>
          <h3 class="resume-form-info-card-heading">{{this.reference.name}}</h3>
          <h3 class="resume-form-info-card-heading">{{this.reference.email}}</h3>
          <p class="resume-form-info-card-heading">{{this.reference.phone}}</p>
          <p class="resume-form-info-card-heading">{{this.reference.relationship}}</p>
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

export class ReferenceCardComponent {
  @Input() reference: Refrence;
  @Input() resumeId: string;

  constructor(private matDialog: MatDialog, private resumeRepo: ResumeRepository, private alertService: AlertService) {
  }

  edit() {
    this.matDialog.open(ReferenceFormComponent, {
      width: '90%', height: '90%', data: {reference: this.reference, resumeId: this.resumeId}
    });
  }

  delete() {
    this.resumeRepo.deleteReference(this.resumeId, this.reference._id)
      .subscribe(data => {
        this.alertService.success('Reference deleted Successfully');
      });
  }
}
