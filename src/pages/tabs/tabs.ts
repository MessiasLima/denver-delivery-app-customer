import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { PecaPage } from '../peca/peca';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PecaPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
