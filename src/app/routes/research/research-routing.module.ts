import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';

const routes: Routes = [
  { path: '', redirectTo: '/dialog', pathMatch: 'full' },
  { path: 'dialog', component: DialogComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ResearchRoutingModule { }
