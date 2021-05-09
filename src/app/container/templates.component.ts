import {Component, OnDestroy} from '@angular/core';
import {Utility} from '../utility/utility';
import {ActivatedRoute} from '@angular/router';
import {map, takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-templates',
  template: `
    <div fxLayout="column" fxLayoutGap="20px"
         fxLayoutAlign="center stretch">
      <div fxLayout="row wrap"
           fxLayoutAlign="start center" fxLayoutGap="30px">
        <app-template-card [resumeId]="resumeId"
                           [template]="template"
                           *ngFor="let template of templates"></app-template-card>
      </div>
    </div>
  `,
  styles: [`
  `]
})

export class TemplatesComponent implements OnDestroy {
  templates = Utility.Templates;
  resumeId;
  isAlive = true;

  constructor(private route: ActivatedRoute) {
    const id$ = this.route.params.pipe(takeWhile(() => this.isAlive)
      , map(data => data.id));
    id$.subscribe(data => {
      this.resumeId = data;
    });
  }

  ngOnDestroy() {
    this.isAlive = false;
  }
}
