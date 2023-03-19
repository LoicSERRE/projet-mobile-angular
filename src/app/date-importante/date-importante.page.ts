import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-date-importante',
  templateUrl: './date-importante.page.html',
  styleUrls: ['./date-importante.page.scss'],
})
export class DateImportantePage implements OnInit {

  event : any;
  listedate : any;
  password: string = '';
  username: string = '';

  constructor(private navCtrl: NavController, private http: HttpClient) {
      this.password = localStorage.getItem('mdpapi')!.toString(); // load password from local storage
      this.username = localStorage.getItem('idapi')!.toString(); // load username from local storage

      this.http.get(`apilink`)
      .subscribe((data) => {
        this.listedate = data;
      }
      );
  }

  // function for navigate to other page
  gomenu(){
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

  gofavoris(){
    this.navCtrl.navigateRoot('/favoris');
  }

  disconnect(){
    this.navCtrl.navigateRoot('/home');
  }

  // function for refresh the list
  rafraichirListe(event : any){
    this.http.get(`apilink`)
    .subscribe((data) => {
      this.listedate = data;
      event.target.complete();
    }
    );
  }

  ngOnInit() {}
}
