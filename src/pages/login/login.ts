import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Nav } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Storage } from '@ionic/storage';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user_id:any;
  loginForm: FormGroup;
  loginError: string;
  inputType = 'password';
  iconPasswor = 'eye';

  constructor(public _storage:Storage, public navCtrl: NavController, public navParams: NavParams, fb: FormBuilder, private auth: AuthServiceProvider, private menu: MenuController, private nav: Nav) {
    this.menu.enable(false, "leftMenu");
    this.menu.enable(false, "rightMenu");
    this.loginForm = fb.group({
    			email: ['', Validators.compose([Validators.required, Validators.email])],
    			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    		});

    let loginPage = this;
    auth.instance.onAuthStateChanged(function(user) {
      if (user) {
        loginPage.menu.enable(true, "leftMenu");
        loginPage.menu.enable(true, "rightMenu");
        loginPage.navCtrl.setRoot('InicioPage'); //to the page where user navigates after login
        console.log('User is signed in.');
      } else {
        //this.nav.setRoot('LoginPage'); // to the login page as user is not logged in
        console.log('No user is signed in.');
      }
    });
  }

  ionViewDidLoad() {

  }

  showPass(){
    if (this.inputType == 'password') {
      this.inputType = 'text';
      this.iconPasswor = 'eye-off';
    }else{
      this.inputType = 'password';
      this.iconPasswor = 'eye';
    }
  }


  login() {
  		let data = this.loginForm.value;

  		if (!data.email) {
  			return;
  		}

  		let credentials = {
  			email: data.email,
  			password: data.password
  		};
  		this.auth.singInWithEmail(credentials)
        .then(
          () => {
            this._storage.set("email",credentials.email).catch((error)=>{
              console.log("It was an error at : " + error);
            });
            this._storage.get("email").then((_value)=>{
              console.log("I catch this: " + _value);
            });
            this.navCtrl.setRoot('InicioPage', {'email': credentials.email});
            this.menu.enable(true, "leftMenu");
            this.menu.enable(true, "rightMenu");

          },
          error => this.loginError = error.message
        )
  	}

  forgotpassword(){
      this.navCtrl.push('ChangepasswordPage');
    }

  signup(){
    this.navCtrl.push('SignupPage');
  }



}
