import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { HttpClientModule } from '@angular/common/http';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { KalkulatorPage } from '../pages/kalkulator/kalkulator';
import { ZfitrahPage } from '../pages/zfitrah/zfitrah';
import { ZprofesiPage } from '../pages/zprofesi/zprofesi';
import { ZpeternakanPage } from '../pages/zpeternakan/zpeternakan';
import { ZpertanianPage } from '../pages/zpertanian/zpertanian';
import { ZemasPage } from '../pages/zemas/zemas';
import { ZmaduPage } from '../pages/zmadu/zmadu';
import { ZperniagaanPage } from '../pages/zperniagaan/zperniagaan';
import { ZhartagalianPage } from '../pages/zhartagalian/zhartagalian';
import { ZsahamPage } from '../pages/zsaham/zsaham';
import { ZlautPage } from '../pages/zlaut/zlaut';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FormatProvider } from '../providers/format/format';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    KalkulatorPage,
    ZfitrahPage,
    ZprofesiPage,
    ZpeternakanPage,
    ZpertanianPage,
    ZemasPage,
    ZmaduPage,
    ZperniagaanPage,
    ZhartagalianPage,
    ZsahamPage,
    ZlautPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrMaskerModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage, 
    KalkulatorPage,
    ZfitrahPage,
    ZprofesiPage,
    ZpeternakanPage,
    ZpertanianPage,
    ZemasPage,
    ZmaduPage,
    ZperniagaanPage,
    ZhartagalianPage,
    ZsahamPage,
    ZlautPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    InAppBrowser,
    FormatProvider
  ]
})
export class AppModule { }
