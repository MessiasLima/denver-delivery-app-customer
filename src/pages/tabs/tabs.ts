import { Component } from '@angular/core';

import { RecebaPage } from '../receba/receba';
import { RepitaPage } from '../repita/repita';
import { PecaPage } from '../peca/peca';

@Component({
	templateUrl: 'tabs.html'
})
export class TabsPage {

	tab1Root = PecaPage;
	tab2Root = RecebaPage;
	tab3Root = RepitaPage;
	
	constructor() {
	}
}
