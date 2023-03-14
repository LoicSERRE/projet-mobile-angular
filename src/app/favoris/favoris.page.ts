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
    this.navCtrl.navigateForward('/logged');
  }
  
  gogalerie() {
    this.navCtrl.navigateForward('/galerie-image');
  }

  goinfo(){
    this.navCtrl.navigateForward('/info-contact');
  }

  goarticle(){
    this.navCtrl.navigateForward('/articles');
  }

  godate(){
    this.navCtrl.navigateForward('/date-importante');
  }

  disconnect(){
    this.navCtrl.navigateForward('/home');
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
