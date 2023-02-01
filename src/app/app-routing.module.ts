import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuitarsComponent } from './components/guitars/guitars.component';
import { EditGuitarComponent } from './components/edit-guitar/edit-guitar.component';
import { DetailGuitarComponent } from './components/detail-guitar/detail-guitar.component';


// Dos rutas son cargadas con lazyLoad (home / newguitar)
// Al resto de rutas no se les aplicó este patrón de diseño por fines didácticos
const routes: Routes = [
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: 'newguitar', loadChildren: () => import('./components/new-guitar/new-guitar.module').then(m => m.NewGuitarModule) },
  { path: 'guitars', component: GuitarsComponent },
  { path: 'editguitar/:id', component: EditGuitarComponent },
  { path: 'guitar/:id', component: DetailGuitarComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
