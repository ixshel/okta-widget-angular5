import { Injectable } from '@angular/core';
import * as OktaSignIn from '@okta/okta-signin-widget';

@Injectable()
export class OktaService {
  widget;

  constructor() {
    this.widget = new OktaSignIn({
      // Have to change this to esri.okta.com
      baseUrl: 'https://dev-731700.oktapreview.com',
      // Change this to cliendID
      clientId: '0oadl20womDlx2aY00h7',
      // Set this to the uri of your app
      redirectUri: 'http://localhost:4200',
      authParams: {
        issuer: 'default'
      }
    });
  }

  getWidget() {
    return this.widget;
  }
}
