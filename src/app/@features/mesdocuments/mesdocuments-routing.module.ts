import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesdocumentsComponent } from './mesdocuments.component';

const routes: Routes = [
  {
    path: '',
    component: MesdocumentsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesDocumentRoutingModule {}
