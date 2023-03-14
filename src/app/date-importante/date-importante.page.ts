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

  gofavoris(){
    this.navCtrl.navigateForward('/favoris');
  }

  disconnect(){
    this.navCtrl.navigateForward('/home');
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
