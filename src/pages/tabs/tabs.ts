import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { KalkulatorPage } from '../kalkulator/kalkulator';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = KalkulatorPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
