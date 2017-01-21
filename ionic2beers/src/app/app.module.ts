
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Http, Response } from '@angular/http';
import { BeersPage } from '../pages/beers/beers';


import { TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { TranslateLoader } from 'ng2-translate/ng2-translate';
import { TranslateParser } from 'ng2-translate/ng2-translate';
import {TranslateModule} from 'ng2-translate';


import {BrowserModule} from '@angular/platform-browser';

import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BeersPage
  ],

  imports: [
    IonicModule.forRoot(MyApp),
      BrowserModule,
      HttpModule,
      TranslateModule.forRoot({
                  provide: TranslateLoader,
                  useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
                  deps: [Http]
              })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BeersPage

  ],
  providers: [ {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
