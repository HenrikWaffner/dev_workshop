import { Component } from '@angular/core';

@Component({
  selector: 'demo',
  template: `
    <div class="demo">
      <h1 *ngIf="!hidden">{{title}}</h1>
    </div>
  `,
  styleUrls: ['./demo.styles.css']
})
export class demo {
  title: string;
  hidden: boolean;
}