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
    this.navCtrl.navigateRoot('/logged');
  }

  godate(){
    this.navCtrl.navigateRoot('/date-importante');
  }

  goinfo(){
    this.navCtrl.navigateRoot('/info-contact');
  }

  goarticle(){
    this.navCtrl.navigateRoot('/articles');
  }

  gofavoris(){
    this.navCtrl.navigateRoot('/favoris');
  }

  disconnect(){
    this.navCtrl.navigateRoot('/home');
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
