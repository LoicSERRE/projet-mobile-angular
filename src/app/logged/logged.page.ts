import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.page.html',
  styleUrls: ['./logged.page.scss'],
})
export class LoggedPage implements OnInit {

  // function for navigate to other page
  goarticles() {
    this.navCtrl.navigateForward('/articles');
  }

  gofavoris() {
    this.navCtrl.navigateForward('/favoris');
  }

  goinfo() {
    this.navCtrl.navigateForward('/info-contact');
  }

  godate() {
    this.navCtrl.navigateForward('/date-importante');
  }

  gogalerie() {
    this.navCtrl.navigateForward('/galerie-image');
  }

  disconnect() {
    this.navCtrl.navigateForward('/home');
  }

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}
}
