import { Component, OnInit } from '@angular/core';
import { OktaService } from './share/okta/okta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  user = undefined;
  info;
  oktaSignIn;

  constructor(private okta: OktaService) {
    this.oktaSignIn = okta.getWidget();
  }

  showLogin() {
    this.oktaSignIn.renderEl({el: '#okta-login-container'}, (res) => {
      if (res.status === 'SUCCESS') {
        this.user = res.claims.email;
      }
    });
  }

  ngOnInit() {
    this.oktaSignIn.session.get((res) => {
      if (res.status !== 'INACTIVE') {
        this.user = res.login;
        this.info = res;
      } else {
        this.showLogin();
      }
    });
  }

  logout() {
    this.oktaSignIn.signOut(() => {
      this.showLogin();
      this.user = undefined;
    });
  }
}
