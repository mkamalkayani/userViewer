import { AppPage } from './app.po';
import { browser, by, element, protractor } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title List of Users', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('List of Users');
  });

  it('should display title Photos', () => {
    page.navigateTo();
    const user = 1;
    page.getUser(user).click();
    expect(page.getTitleText()).toEqual('Albums');
    expect(page.getPhotoComponent().getText()).toBe('');
    page.getButton().click();
    expect(page.getPhotoComponent().$('h1').getText()).toBe('Photos');

  });
});

