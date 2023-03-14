import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoContactPageRoutingModule } from './info-contact-routing.module';

import { InfoContactPage } from './info-contact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoContactPageRoutingModule
  ],
  declarations: [InfoContactPage]
})
export class InfoContactPageModule {}
