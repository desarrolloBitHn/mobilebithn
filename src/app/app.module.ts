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
import { HttpClientModule } from '@angular/common/http';
import { EqualValidator } from '../directives/equal-validator/equal-validator';
import { IonicStorageModule } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing';


@NgModule({
  declarations: [
    MyApp,
    EqualValidator,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig1),
    AngularFireDatabaseModule,
    HttpModule,
    HttpClientModule,
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
    File,
    SocialSharing
  ]
})
export class AppModule {}
