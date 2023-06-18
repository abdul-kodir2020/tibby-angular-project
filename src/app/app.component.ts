import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tibby-angular-project';
  show: boolean = false

  onNotifyShow(){
    this.show = true
  }

  onNotifyClose(){
    this.show = false
  }
}
