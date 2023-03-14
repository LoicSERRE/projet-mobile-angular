import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GalerieImagePageRoutingModule } from './galerie-image-routing.module';

import { GalerieImagePage } from './galerie-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GalerieImagePageRoutingModule
  ],
  declarations: [GalerieImagePage]
})
export class GalerieImagePageModule {}
