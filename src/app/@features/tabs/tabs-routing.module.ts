import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs.component';
// const redirectToProfileEditOrLogin = () => map(user => user ? ['profiles', user.uid, 'edit'] : ['login']);

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'new-document',
        loadChildren: () =>
          import('../new-document/new-document.module').then(
            (m) => m.NewDocumentModule
          ),
      },
      {
        path: 'mes-documents',
        loadChildren: () =>
          import('../mesdocuments/mesdocuments.module').then(
            (m) => m.MesdocumentsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsRoutingModule {}
