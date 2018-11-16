import { Component, OnInit, Input} from '@angular/core';
import { trigger, transition, state, animate, style } from '@angular/animations';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.css'],
  animations:[
  trigger('openClose', [
      // ...
      state('open', style({

      })),
      state('closed', style({
      	height:'0px',
      	display: 'none'
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
      transition('* => closed', [
        animate('0.5s')
      ]),
      transition('* => open', [
        animate('0.5s')
      ]),
      transition('open <=> closed', [
        animate('0.5s')
      ]),
      transition ('* => open', [
        animate ('0.5s',
          style ({ opacity: '*' }),
        ),
      ]),
      transition('* => *', [
        animate('0.5s')
      ]),
    ]),
  ]
})

export class SidebarItemComponent implements OnInit {
	@Input() name: string;
	@Input() icon: string;
	@Input() subItems:string[];
	isOpen = false;
  
  constructor() { }

  ngOnInit() {
  }
  
  toggleSubs(){
  	this.isOpen = !this.isOpen;
  }

}
