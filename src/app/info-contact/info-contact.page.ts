import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-info-contact',
  templateUrl: './info-contact.page.html',
  styleUrls: ['./info-contact.page.scss'],
})
export class InfoContactPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  // function for navigate to other page
  gomenu() {
    this.navCtrl.navigateForward('/logged');
  }
  
  gogalerie() {
    this.navCtrl.navigateForward('/galerie-image');
  }

  godate(){
    this.navCtrl.navigateForward('/date-importante');
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

  // open google maps with the address of the school
  openMap(){
    window.open('https://www.google.com/maps/search/?api=1&query=1%2C+rue+des+%C3%A9coles%2C+13000+Saint+Exup%C3%A9ry', '_system');
  }

  // open the phone app with the phone number of the school
  callNumber(){
    window.open('tel:0412345678', '_system');
  }

  // open the mail app with the mail address of the school
  sendMail(){
    window.open('mailto:contact@lepetitprince.fr', '_system');
  }

  ngOnInit() {}
}
