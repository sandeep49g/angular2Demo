import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent{

  constructor() { }

  @Input() iconClass: string;
  @Input() text: string;

  @Output() callBack: EventEmitter<any> = new EventEmitter();

  buttonPressed (){
    this.callBack.emit(null);
  }
}
