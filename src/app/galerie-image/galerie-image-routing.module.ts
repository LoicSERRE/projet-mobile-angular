import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalerieImagePage } from './galerie-image.page';

const routes: Routes = [
  {
    path: '',
    component: GalerieImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalerieImagePageRoutingModule {}
