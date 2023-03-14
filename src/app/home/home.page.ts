import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string;
  password: string;
  rememberMe: boolean;
  toastCtrl: any;

  constructor(private http: HttpClient, public toastController: ToastController, private navCtrl: NavController) {
    this.username = "";
    this.password = "";
    this.rememberMe = false;
    this.toastCtrl = toastController;
  }

  ionViewWillEnter() {
    try{
      if(localStorage.getItem('id') != null && localStorage.getItem('mdp') != null){
        this.username = localStorage.getItem('id')!.toString();
        this.password = localStorage.getItem('mdp')!.toString();
        this.rememberMe = true;
      }
    }
    catch(e){
      console.log(e);
    }
  }

  async login() {
    try{
      // remove the id and password from local storage for change if the user want to change the account
      localStorage.removeItem('id');
      localStorage.removeItem('mdp');
      localStorage.removeItem('idapi');
      localStorage.removeItem('mdpapi');
      this.username = localStorage.getItem('id')!.toString();
      this.password = localStorage.getItem('mdp')!.toString();
    }
    catch(e){
      console.log(e);
    }

    // Request to the API to check if the user is correct
    const url = `apilink`;
    this.http.get(url).subscribe(async (data: any) => {
      if (data.resultat == "OK") { // if the user is correct
        if(this.rememberMe){ // if the user want to remember the account
          // save the id and password in local storage
          localStorage.removeItem('id');
          localStorage.removeItem('mdp');
          localStorage.removeItem('idapi');
          localStorage.removeItem('mdpapi');
          localStorage.setItem('id', this.username);
          localStorage.setItem('mdp', this.password);
        }
        else{
          // remove the id and password from local storage
          localStorage.removeItem('id');
          localStorage.removeItem('mdp');
        }
        // save the id and password in local storage if the user want to remember the account
        localStorage.setItem('idapi', this.username);
        localStorage.setItem('mdpapi', this.password);
        localStorage.setItem('id', this.username);
        localStorage.setItem('mdp', this.password);
        // if the user is correct, go to the logged page
        this.navCtrl.navigateForward('/logged');
      } 
      else {
        // if the user is incorrect, show a toast with the error
        const toast = await this.toastCtrl.create({
          message: 'Mot de passe ou identifiant incorrect',
          duration: 2000,
          position: 'top',
          color: 'danger',
          buttons: [
            {
              side: 'start',
              icon: 'warning',
              text: 'Erreur',
            }, {
              text: 'Ok',
              role: 'cancel',
            }
          ]
        });
        toast.present();
      }
    });
  }
}
