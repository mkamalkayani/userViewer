import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('h1')).getText();
  }

  getUser(id: number) {
    return element(by.css(`div[ng-reflect-router-link="/users/${id}"]`));
  }

  getPhotoComponent() {
    return element(by.css('app-photo'));
  }

  getButton() {
    return element(by.css('button'));
  }
}
