import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-galerie-image',
  templateUrl: './galerie-image.page.html',
  styleUrls: ['./galerie-image.page.scss'],
})
export class GalerieImagePage implements OnInit {

  event : any;
  listeimages : any;
  password: string = '';
  username: string = '';
  linkimage : string = 'imagelink';

  constructor(private navCtrl: NavController, private http: HttpClient) {
    this.username = localStorage.getItem('idapi')!.toString();
    this.password = localStorage.getItem('mdpapi')!.toString();

    this.http.get(`apilink`)
    .subscribe((data) => {
      this.listeimages = data;
    }
    );
  }

  gomenu() {
    this.navCtrl.navigateForward('/logged');
  }

  godate(){
    this.navCtrl.navigateForward('/date-importante');
  }

  goinfo(){
    this.navCtrl.navigateForward('/info-contact');
  }

  goarticle(){
    this.navCtrl.navigateForward('/articles');
  }

  gofavoris(){
    this.navCtrl.navigateForward('/favoris');
  }

  disconnect(){
    this.navCtrl.navigateForward('/home');
  }

  rafraichirListe(event : any){
    this.http.get(`apilink`)
    .subscribe((data) => {
      this.listeimages = data;
      event.target.complete();
    }
    );
  }

  ngOnInit() {
  }

}
