import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-not-found',
  template: `
    <div fxFlex="100%" fxLayout="column" fxLayoutAlign="center center">
      <h1>Oops! You landed on a wrong Back</h1>
      <button mat-raised-button color="primary" (click)="this.router.navigate([''])">Go to Home</button>
    </div>
  `,
  styles: [``]
})

export class NotFoundComponent {

  constructor(public router: Router) {
  }
}
