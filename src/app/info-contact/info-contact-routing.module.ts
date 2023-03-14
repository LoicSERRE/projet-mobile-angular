import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoContactPage } from './info-contact.page';

const routes: Routes = [
  {
    path: '',
    component: InfoContactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoContactPageRoutingModule {}
