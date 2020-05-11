import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { UpdatenumeroPageRoutingModule } from './updatenumero-routing.module';

import { UpdatenumeroPage } from './updatenumero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatenumeroPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdatenumeroPage]
})
export class UpdatenumeroPageModule {}
