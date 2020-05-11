import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatenumeroPage } from './createnumero.page';

const routes: Routes = [
  {
    path: '',
    component: CreatenumeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatenumeroPageRoutingModule {}
