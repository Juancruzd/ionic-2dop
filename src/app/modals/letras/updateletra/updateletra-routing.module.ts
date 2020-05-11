import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateletraPage } from './updateletra.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateletraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateletraPageRoutingModule {}
