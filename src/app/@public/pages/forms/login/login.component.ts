import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { basicAlert } from '@shared/alerts/toasts';
import { TYPE_ALERT } from '@shared/alerts/values.config';

import { ILoginForm } from '@shop/core/interfaces/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: ILoginForm = {
    email: '',
    password: ''
  };
  constructor(private auth: AuthService, private router: Router) { }
  

  ngOnInit(): void {
      //this.auth.getMe().subscribe(result=> console.log(result));
  }

  init(){
    console.log(this.login);
    this.auth.login(this.login.email, this.login.password).subscribe(
      (result: any) => {
        console.log(result);
        if (result.status) {
          if (result.token !== null) {
            basicAlert(TYPE_ALERT.SUCCESS, result.message);
            this.auth.setSession(result.token);
            this.auth.updateSession(result);
            return;
          }
          basicAlert(TYPE_ALERT.WARNING, result.message);
          return;
        }
        basicAlert(TYPE_ALERT.INFO, result.message);
      }
  
    );
}

}
