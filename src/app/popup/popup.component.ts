import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

  checkForm = this.formBuilder.group({
    prenom: '',
    email: ''
  })

  @Input() show: boolean | undefined
  @Output() notifyClose = new EventEmitter()

  constructor( private formBuilder: FormBuilder ){ }

  onSubmit(){
    console.log(this.checkForm.value)
  }
}
