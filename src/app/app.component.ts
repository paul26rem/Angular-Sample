import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-sample';
  _opened: boolean = false;
  _showBackdrop: boolean = true;
  _toggleSidebar() {
    this._opened = !this._opened;
	}
  toggleSidebar(event){
  	this._opened = !this._opened;
  }
}
