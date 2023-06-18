import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-rounded',
  templateUrl: './button-rounded.component.html',
  styleUrls: ['./button-rounded.component.css']
})
export class ButtonRoundedComponent {
  @Input() img: string | undefined;
  @Output() notifyShow = new EventEmitter()
}
