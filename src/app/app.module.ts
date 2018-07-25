import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { EmailComposer } from '@ionic-native/email-composer';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Firebase} from '@ionic-native/firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HttpModule } from '@angular/http';
import { Toast } from '@ionic-native/toast';

export const firebaseConfig = {
  apiKey:"AAAA4Jgv6Ss:APA91bFpa2p_o9_v6RB-fjmhrcqp3pM_cSzUIMihKlfsXKLpQOnmsvwcBDcW38XjC1eyXlZh_hc_bKQiyDiHzdxL5sQQceUcQ8YJE8usP8WQCteftp95K2URwevCGNlherFmwc2Ej1d6",
  authDomain: "firstdb00.firebaseio.com",
  databaseURL:"https://firstdb00.firebaseio.com",
  projectId: "firstdb00",
  storageBucket: "",
  massaginSenderId: ""
};

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule,
    AngularFireDatabaseModule,
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    EmailComposer,
    StatusBar,
    SplashScreen,
    Firebase,
    Toast,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
