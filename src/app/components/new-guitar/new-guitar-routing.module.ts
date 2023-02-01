import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewGuitarComponent } from './new-guitar.component';

const routes: Routes = [{ path: '', component: NewGuitarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewGuitarRoutingModule { }
