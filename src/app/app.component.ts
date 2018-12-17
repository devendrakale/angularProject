import { Component, OnInit, Input } from '@angular/core';
import { User } from './data-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;

constructor(){
  this.user = new User();
  this.user.name = "Devendra";
  this.user.title = "software Developer";
  this.user.address = "102, Mitrangan, Baner",
  this.user.mobile = ['9999999999','8888888888']
}
ngOnInit() {
  console.log(User);
  
}
}

