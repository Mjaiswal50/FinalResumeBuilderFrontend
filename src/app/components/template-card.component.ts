import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-template-card',
  template: `
    <mat-card (click)="openTemplate()" matRipple fxLayout="column">
      <img mat-card-image [src]="template.src"/>
      <span style=" text-align: center;
      color: #538ec3;">{{template.name}}</span>
    </mat-card>
  `,
  styles: [`
    mat-card {
      width: 240px;
      text-transform: uppercase;
      margin: 1rem 0;
      margin-left: 1rem;
    }

    img {
      width: 239px;
      height: 300px;
    }
  `]
})

export class TemplateCardComponent {
  @Input() template;
  @Input() resumeId;

  constructor(private router: Router) {
  }

  openTemplate() {
    this.router.navigate(['dashboard', 'resume', 'template',
      this.resumeId, this.template.id]);
  }
}
