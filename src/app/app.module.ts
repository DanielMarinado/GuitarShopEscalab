import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GuitarsComponent } from './components/guitars/guitars.component';
import { CardComponent } from './components/card/card.component';
import { CartComponent } from './components/cart/cart.component';
import { EditGuitarComponent } from './components/edit-guitar/edit-guitar.component';
import { DetailGuitarComponent } from './components/detail-guitar/detail-guitar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GuitarsComponent,
    CardComponent,
    CartComponent,
    EditGuitarComponent,
    DetailGuitarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-fajyxgnfrvohzzxu.us.auth0.com',
      clientId: 'wLV8MD8WGiIjxm5s9Yytyev0ekSdtU0l',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
