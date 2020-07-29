import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'inv_button',
  template: `
    <div class="inv_button">
      <button class="btn" (click)="onClick()">{{title}}</button>
    </div>
  `,

  styleUrls: ['./inv_button.styles.css']
})
export class InvButton {
  title: string;
  onClick() {
    alert('ALERT');
  }
}