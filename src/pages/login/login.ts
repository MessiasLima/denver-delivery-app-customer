import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';

@IonicPage()
@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public facebook: Facebook
	) { }

	//método para chamar api do facebook e salvar no banco o usuario    
	loginFacebook() {
		let permissions = new Array<string>();
		permissions = ["public_profile", "email"];

		this.facebook.login(permissions).then((response) => {

			console.log("response login");
			console.log(response);



		}, (error) => {
			alert(error);
		});
	}

	apiFacebook() {
		let params = new Array<string>();
		this.facebook.api("/me?fields=name,email", params)
			.then(res => {
				console.log("response api");
				console.log(res);
			}, (error) => {
				alert(error);
				console.log('ERRO LOGIN: ', error);
			});
	}

	logoutFacebook(){
		this.facebook.logout().then(
			data =>{
				console.log(data);
			}
		)
	}
}
