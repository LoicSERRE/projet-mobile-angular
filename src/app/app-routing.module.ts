import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'logged',
    loadChildren: () => import('./logged/logged.module').then( m => m.LoggedPageModule)
  },
  {
    path: 'articles',
    loadChildren: () => import('./articles/articles.module').then( m => m.ArticlesPageModule)
  },
  {
    path: 'galerie-image',
    loadChildren: () => import('./galerie-image/galerie-image.module').then( m => m.GalerieImagePageModule)
  },
  {
    path: 'date-importante',
    loadChildren: () => import('./date-importante/date-importante.module').then( m => m.DateImportantePageModule)
  },
  {
    path: 'info-contact',
    loadChildren: () => import('./info-contact/info-contact.module').then( m => m.InfoContactPageModule)
  },
  {
    path: 'favoris',
    loadChildren: () => import('./favoris/favoris.module').then( m => m.FavorisPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
