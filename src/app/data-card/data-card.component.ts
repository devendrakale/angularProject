import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.css']
})
export class DataCardComponent implements OnInit {

  @Input('user') user = User;

  constructor() { 
  }
 
  ngOnInit() {
    console.log(User)
  }
}
