import {Component, Input} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ApiService} from '../../../services/api-service';
import {AlertService} from '../../../services/alert-service';
import {Language} from '../../../models/language';
import {LanguageFormComponent} from '../resume-dialogues/language-form.component';
import {ResumeRepository} from '../../../repository/resume-repository';

@Component({
  selector: 'app-language-card',
  template: `
    <div style="position: relative;margin-bottom: 1rem;" fxLayoutAlign="center center" fxLayout="column">
      <div class="cards-outer-div" fxLayout="column" fxLayoutAlign="center center">
        <ng-container>
          <h3 class="resume-form-info-card-heading">{{language.name}}</h3>
          <h3 class="resume-form-info-card-heading">{{language.level}}</h3>
          <p class="resume-form-info-card-heading">{{language.represent}}</p>
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

export class LanguageCardComponent {
  @Input() language: Language;
  @Input() resumeId: string;

  constructor(private matDialog: MatDialog, private resumeRepo: ResumeRepository, private alertService: AlertService) {
  }

  edit() {
    this.matDialog.open(LanguageFormComponent, {
      width: '90%', height: '90%', data: {language: this.language, resumeId: this.resumeId}
    });
  }

  delete() {
    this.resumeRepo.deleteLanguage(this.resumeId, this.language._id)
      .subscribe(data => {
        this.alertService.success('Language deleted Successfully');
      });
  }
}
