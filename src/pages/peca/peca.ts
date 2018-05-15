import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
	selector: 'page-peca',
	templateUrl: 'peca.html'
})
export class PecaPage {

	segmentoSelecionado : string = "principal";

	constructor(public navCtrl: NavController) {

	}

	login(){
		this.navCtrl.push(LoginPage);
	}
}
