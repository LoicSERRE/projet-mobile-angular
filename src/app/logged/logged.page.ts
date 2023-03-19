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
    this.navCtrl.navigateRoot('/articles');
  }

  gofavoris() {
    this.navCtrl.navigateRoot('/favoris');
  }

  goinfo() {
    this.navCtrl.navigateRoot('/info-contact');
  }

  godate() {
    this.navCtrl.navigateRoot('/date-importante');
  }

  gogalerie() {
    this.navCtrl.navigateRoot('/galerie-image');
  }

  disconnect() {
    this.navCtrl.navigateRoot('/home');
  }

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}
}
