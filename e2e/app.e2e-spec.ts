import { OktaSignInPage } from './app.po';

describe('okta-sign-in App', () => {
  let page: OktaSignInPage;

  beforeEach(() => {
    page = new OktaSignInPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
