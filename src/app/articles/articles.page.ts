import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
})
export class ArticlesPage implements OnInit {

  event : any;
  listearticles : any;
  HomePage: any;
  password: string = '';
  username: string = '';
  listfavoris: any = [];

  constructor(private navCtrl: NavController, private http: HttpClient) {
    this.password = localStorage.getItem('mdpapi')!.toString();
    this.username = localStorage.getItem('idapi')!.toString();

    this.http.get(`apilink`)
    .subscribe((data) => {
      this.listearticles = data;
    }
    );
    if (localStorage.getItem('favoris') != null){
      this.listfavoris = JSON.parse(localStorage.getItem('favoris')!);
    }
  }

  // function for navigate to other page
  gomenu() {
    this.navCtrl.navigateRoot('/logged');
  }

  gogalerie() {
    this.navCtrl.navigateRoot('/galerie-image');
  }

  godate(){
    this.navCtrl.navigateRoot('/date-importante');
  }

  goinfo(){
    this.navCtrl.navigateRoot('/info-contact');
  }

  gofavoris(){
    this.navCtrl.navigateRoot('/favoris');
  }

  disconnect(){
    this.navCtrl.navigateRoot('/home');
  }

  // function for add or remove article to favorite list
  ajouterFavoris(articles : any, event : any){
    if(event.detail.checked){ // if the checkbox is checked
      this.listfavoris.push(articles); // add the article to the list
      localStorage.setItem('favoris', JSON.stringify(this.listfavoris)); // save the list in the local storage
    }
    else{ // delete the article from the list if the checkbox is unchecked
      this.listfavoris.forEach((article : any) => {
        if(article.titre == articles.titre){
          let index = this.listfavoris.indexOf(article);
          if (index > -1) {
            this.listfavoris.splice(index, 1);
          }
        }
      }
      );
      localStorage.setItem('favoris', JSON.stringify(this.listfavoris));
    }
  }

  rechercher(event : any){
    if(event.target.value == ''){
      this.http.get(`apilink`)
      .subscribe((data) => {
        this.listearticles = data;
      }
      );
    }
    else{
      this.listearticles.articles.forEach((article : any) => {
        if(!article.titre.toLowerCase().includes(event.target.value.toLowerCase())){
          let index = this.listearticles.articles.indexOf(article);
          if (index > -1) {
            this.listearticles.articles.splice(index, 1);
          }
        }
      });
    }
  }

  // return true or false if the article is in the favorite list
  isfavoris(article : any){
    if(localStorage.getItem('favoris') != null){
      if (localStorage.getItem('favoris')!.toString().includes(article.titre)){
        return true;
      }
    }
    return false;
  }

  // function for refresh the list of articles
  rafraichirListe(event : any){
    this.http.get(`apilink`)
      .subscribe((data) => {
        this.listearticles = data;
        event.target.complete();
      }
      );
  }

  // load the list of articles and the favorite list when the page is loaded
  ngOnInit() {
    this.http.get(`apilink`)
      .subscribe((data) => {
        this.listearticles = data;
      }
      );
    if (localStorage.getItem('favoris') != null){
      this.listfavoris = JSON.parse(localStorage.getItem('favoris')!);
    }
  }
}
