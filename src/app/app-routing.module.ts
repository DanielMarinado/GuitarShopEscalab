import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuitarsComponent } from './components/guitars/guitars.component';
import { EditGuitarComponent } from './components/edit-guitar/edit-guitar.component';
import { DetailGuitarComponent } from './components/detail-guitar/detail-guitar.component';
import { Auth0Guard } from './guards/auth0.guard';
import { AuthGuard } from '@auth0/auth0-angular';


// Dos rutas son cargadas con lazyLoad (home / newguitar)
// Al resto de rutas no se les aplicó este patrón de diseño por fines didácticos

// Todas las rutas, a excepción de home poseen un Guard, 
// 1.- Se utiliza el Auth0Guard construido para nosotros para validar si está autenticacdo.
// 2.- Se utiliza AuthGuard, que es un Guard que nos provee la librería Auth0 y cumple el mismo cometido que el Guard anterior.

// En uso de pipes, se encuentrass en cart.component.html para poner en mayúsculas el nombre de las guitarras, tambien se usa el pipe async que se subscribe a un observable o promesa y retorna el ultimo valor emitido.
const routes: Routes = [
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: 'newguitar', loadChildren: () => import('./components/new-guitar/new-guitar.module').then(m => m.NewGuitarModule), canActivate: [Auth0Guard] },
  { path: 'guitars', component: GuitarsComponent, canActivate: [Auth0Guard] },
  { path: 'editguitar/:id', component: EditGuitarComponent, canActivate: [AuthGuard] },
  { path: 'guitar/:id', component: DetailGuitarComponent, canActivate: [AuthGuard] },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
