import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MesdocumentsComponent } from './mesdocuments.component';
import { IonicModule } from '@ionic/angular';
import { MesDocumentRoutingModule } from './mesdocuments-routing.module';

@NgModule({
  declarations: [MesdocumentsComponent],
  imports: [CommonModule, IonicModule, MesDocumentRoutingModule],
})
export class MesdocumentsModule {}
