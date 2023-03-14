import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DateImportantePage } from './date-importante.page';

const routes: Routes = [
  {
    path: '',
    component: DateImportantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DateImportantePageRoutingModule {}
