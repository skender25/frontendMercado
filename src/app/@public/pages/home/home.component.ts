import { UsersService } from '@core/services/users.service';
import { AuthService } from '@core/services/auth.service';
import { Apollo } from 'apollo-angular';
import { ApiService } from '@graphql/services/api.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private api: UsersService , private auth: AuthService) { }

  ngOnInit(): void {
   
    this.api.getUsers().subscribe( result => {
      console.log('chupai' ,result); // { { status message users: []}
    });
   /* this.auth.login("alex26595@gmalifsdgb.com","dona").subscribe( result => {
      console.log(result); // { { status message users: []}
    });

    this.api.getUsers().subscribe( result => {
      console.log(result); // { { status message users: []}
    });

    this.auth.getMe().subscribe( result => {
      console.log(result); // { { status message users: []}
    });*/

  }

}
