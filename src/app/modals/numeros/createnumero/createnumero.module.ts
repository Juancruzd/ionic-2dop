import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CreatenumeroPageRoutingModule } from './createnumero-routing.module';

import { CreatenumeroPage } from './createnumero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatenumeroPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreatenumeroPage]
})
export class CreatenumeroPageModule {}
