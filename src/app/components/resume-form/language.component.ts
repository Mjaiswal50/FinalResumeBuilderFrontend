import {Component, Input} from '@angular/core';
import {Language} from '../../models/language';
import {MatDialog} from '@angular/material/dialog';
import {LanguageFormComponent} from './resume-dialogues/language-form.component';

@Component({
  selector: 'app-language',
  template: `
    <div fxLayout="column" fxLayoutGap="30px">
      <app-language-list [resumeId]="resumeId" [languageList]="languages"></app-language-list>
      <button (click)="add()" mat-raised-button color="primary">Add</button>
    </div>
  `,
  styles: [``]
})

export class LanguageComponent {
  @Input() languages: Language[];
  @Input() resumeId: string;

  constructor(private dialog: MatDialog) {
  }

  add() {
    const dialogRef = this.dialog.open(LanguageFormComponent, {
      disableClose: true,
      data: {resumeId: this.resumeId}
    });
    dialogRef.updateSize('90%', '90%');
  }
}
