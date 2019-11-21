import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '../../../node_modules/@ionic-native/in-app-browser';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  url: string;

  constructor(public navCtrl: NavController, private inappbrowser: InAppBrowser) {

  }

  openInAppBrowser(url: string) {
    const option: InAppBrowserOptions = {
      zoom: 'no'
    }
    const browser = this.inappbrowser.create(url, '_self', option);
    browser.show();
  }

}
