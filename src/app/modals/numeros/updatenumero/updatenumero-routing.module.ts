import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatenumeroPage } from './updatenumero.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatenumeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatenumeroPageRoutingModule {}
