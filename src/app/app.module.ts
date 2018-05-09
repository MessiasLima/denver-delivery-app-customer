import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { RecebaPage } from '../pages/receba/receba';
import { RepitaPage } from '../pages/repita/repita';
import { PecaPage } from '../pages/peca/peca';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PrincipalPageModule } from '../pages/principal/principal.module';
import { RestaurantePageModule } from '../pages/restaurante/restaurante.module';
import { RestaurantesPageModule } from '../pages/restaurantes/restaurantes.module';
import { PrincipalPage } from '../pages/principal/principal';

@NgModule({
	declarations: [
		MyApp,
		RecebaPage,
		RepitaPage,
		PecaPage,
		TabsPage
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp,{
			mode: "ios"
		}),
		PrincipalPageModule,
		RestaurantePageModule,
		RestaurantesPageModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		RecebaPage,
		RepitaPage,
		PecaPage,
		TabsPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler }
	]
})
export class AppModule { }
