import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ApiService} from '../../../services/api-service';
import {Skill} from '../../../models/skill';
import {ResumeRepository} from '../../../repository/resume-repository';

interface DataType {
  skill: Skill;
  resumeId: string;
}

@Component({
  selector: 'app-skill-form',
  template: `
    <form [formGroup]="this.form" (submit)="this.form.valid && addOrUpdate()">
      <div fxLayout="column" fxLayoutGap="10px">
        <mat-form-field>
          <input formControlName="skill" matInput placeholder="Skill"/>
          <mat-error>Skill is Required</mat-error>
        </mat-form-field>
        <mat-form-field>
          <mat-label>Level</mat-label>
          <mat-select formControlName="level">
            <mat-option *ngFor="let level of this.levelArray" [value]="level">
              {{level}}
            </mat-option>
          </mat-select>
          <mat-error>Please provide A Valid Level</mat-error>
        </mat-form-field>
        <div fxLayout="row" fxLayoutAlign="end" fxLayoutGap="20px">
          <button style="    width: 10%;" fxFlexAlign="end" mat-raised-button color="primary">
            <span *ngIf="this.data.skill">Update</span>
            <span *ngIf="!this.data.skill">Add</span>
          </button>
          <button (click)="cancel()" type="button" style="    width: 10%;" fxFlexAlign="end" mat-raised-button color="accent">Cancel
          </button>
        </div>
      </div>
    </form>
  `,
  styles: [``]
})

export class SkillFormComponent implements OnInit {
  form: FormGroup;
  levelArray = ['basic', 'intermediate', 'advance'];

  constructor(public dialogRef: MatDialogRef<SkillFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DataType, private resumeRepository: ResumeRepository) {
  }

  ngOnInit() {
    const skill = this.data.skill ? this.data.skill.skill : null;
    const level = this.data.skill ? this.data.skill.level : null;
    this.form = new FormGroup({
      skill: new FormControl(skill, [Validators.required]),
      level: new FormControl(level, [Validators.required])
    });
  }

  cancel() {
    this.dialogRef.close();
  }

  addOrUpdate() {
    if (this.data.skill) {
      this.update();
    } else {
      this.save();
    }
  }

  update() {
    const observer$ = this.resumeRepository.updateSkill(this.form.value, this.data.skill._id, this.data.resumeId);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }

  save() {
    const observer$ = this.resumeRepository.addSkill(this.form.value, this.data.resumeId);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }
}
