import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { BeersPage } from '../pages/beers/beers';

import { TranslateService } from 'ng2-translate/ng2-translate';
import { TranslateLoader } from 'ng2-translate/ng2-translate';
import { TranslateParser } from 'ng2-translate/ng2-translate';

@Component({
  templateUrl: 'app.html',
  
})
export class MyApp {
  rootPage = HomePage;

  pages = [];

  constructor(translate: TranslateService, platform: Platform) {
    // set default language
translate.setDefaultLang('en');
translate.use(translate.getBrowserLang());


    this.pages = [
        { title: 'Home', component: HomePage },
        { title: 'Beers list', component: BeersPage }
      ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });



  }

  openPage(page) {
     // Reset the content nav to have just this page
     // we wouldn't want the back button to show in this scenario

     // this.nav.setRoot(page.component);

     this.rootPage = page.component;



  }

}
