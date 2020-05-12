import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
///se gregan las librerias o complementos de firebase asi como las firebaseConfig del proyecto
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from './../environments/environment'; 
///agrego la libreria de base de datos de firebase 
 
import { AngularFirestoreModule } from '@angular/fire/firestore'; 
import { AngularFireDatabaseModule } from '@angular/fire/database';

///se agregan los imports de las paginas para tomarlas como ventanas modal
import { CreatenumeroPageModule } from '../app/modals/numeros/createnumero/createnumero.module';
import { UpdatenumeroPageModule } from '../app/modals/numeros/updatenumero/updatenumero.module';
import { CreateletraPageModule } from '../app/modals/letras/createletra/createletra.module';
import { UpdateletraPageModule } from '../app/modals/letras/updateletra/updateletra.module'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
      //inicializar nuestra conexion o aplicacion de firebase con sus configuraciones
      AngularFireModule.initializeApp(environment.firebaseConfig),///configuration firebase
      AngularFireAuthModule,///auth
      AngularFireDatabaseModule,///database
      AngularFirestoreModule,///database
      ///imports mpage modal
      CreatenumeroPageModule,
      UpdatenumeroPageModule,
      CreateletraPageModule,
      UpdateletraPageModule
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
