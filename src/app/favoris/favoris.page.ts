import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.page.html',
  styleUrls: ['./favoris.page.scss'],
})
export class FavorisPage implements OnInit {

  listefavoris : any;

  constructor(private navCtrl: NavController) {
    // load the list of favorite articles from local storage
    this.listefavoris = JSON.parse(localStorage.getItem('favoris')!);
  }

  // function for navigate to other page
  gomenu() {
    this.navCtrl.navigateRoot('/logged');
  }
  
  gogalerie() {
    this.navCtrl.navigateRoot('/galerie-image');
  }

  goinfo(){
    this.navCtrl.navigateRoot('/info-contact');
  }

  goarticle(){
    this.navCtrl.navigateRoot('/articles');
  }

  godate(){
    this.navCtrl.navigateRoot('/date-importante');
  }

  disconnect(){
    this.navCtrl.navigateRoot('/home');
  }

  rafraichirListe(event : any){
    this.listefavoris = JSON.parse(localStorage.getItem('favoris')!);
    event.target.complete();
  }

  // refresh the list when the page is loaded because the list is not updated when we add or remove an article
  ngOnInit() {
    this.rafraichirListe;
  }

}
