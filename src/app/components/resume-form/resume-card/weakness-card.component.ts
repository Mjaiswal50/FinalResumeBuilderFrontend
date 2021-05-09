import {Component, Input} from '@angular/core';
import {Weakness} from '../../../models/weakness';
import {MatDialog} from '@angular/material/dialog';
import {ApiService} from '../../../services/api-service';
import {AlertService} from '../../../services/alert-service';
import {WeaknessFormComponent} from '../resume-dialogues/weakness-form.component';
import {ResumeRepository} from '../../../repository/resume-repository';

@Component({
  selector: 'app-weakness-card',
  template: `
    <div style="position: relative;margin-bottom: 1rem;" fxLayoutAlign="center center" fxLayout="column">
      <div class="cards-outer-div" fxLayout="column" fxLayoutAlign="center center">
        <ng-container>
          <h3 class="resume-form-info-card-heading">{{weakness.name}}</h3>
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

export class WeaknessCardComponent {
  @Input() weakness: Weakness;
  @Input() resumeId: string;

  constructor(private matDialog: MatDialog, private resumeRepo: ResumeRepository, private alertService: AlertService) {
  }

  edit() {
    this.matDialog.open(WeaknessFormComponent, {
      width: '90%', height: '90%', data: {weakness: this.weakness, resumeId: this.resumeId}
    });
  }

  delete() {
    this.resumeRepo.deleteWeakness(this.resumeId, this.weakness._id)
      .subscribe(data => {
        this.alertService.success('strength deleted Successfully');
      });
  }
}
