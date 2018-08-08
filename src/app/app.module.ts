import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { EmailComposer } from '@ionic-native/email-composer';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Firebase } from '@ionic-native/firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HttpModule } from '@angular/http';
import { Toast } from '@ionic-native/toast';
import { CarshopServiceProvider } from '../providers/carshop-service/carshop-service';
import { firebaseConfig1 } from '../config';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { Globals } from '../globals';
import { ServicioService } from '../providers/servicio-service/servicio-service';
import { File } from '@ionic-native/file';



@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig1),
    AngularFireDatabaseModule,
    HttpModule,
    NgxErrorsModule,
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CarshopServiceProvider,
    AngularFireAuth,
    AuthServiceProvider,
    Globals,
    ServicioService,
    File
  ]
})
export class AppModule {}
