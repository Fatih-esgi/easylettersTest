import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './@features/home/home.component';
import { NewDocumentComponent } from './@features/new-document/new-document.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NewDocumentComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
