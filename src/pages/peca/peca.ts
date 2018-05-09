import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-peca',
	templateUrl: 'peca.html'
})
export class PecaPage {

	segmentoSelecionado : string = "principal";

	constructor(public navCtrl: NavController) {

	}

}
