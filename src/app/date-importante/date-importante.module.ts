import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DateImportantePageRoutingModule } from './date-importante-routing.module';

import { DateImportantePage } from './date-importante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DateImportantePageRoutingModule
  ],
  declarations: [DateImportantePage]
})
export class DateImportantePageModule {}
