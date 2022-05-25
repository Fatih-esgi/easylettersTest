import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { TabsRoutingModule } from './tabs-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [TabsComponent],
  imports: [CommonModule, TabsRoutingModule, IonicModule],
})
export class TabsModule {}
