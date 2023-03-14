import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticlesPageRoutingModule } from './articles-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { ArticlesPage } from './articles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticlesPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ArticlesPage]
})
export class ArticlesPageModule {}
