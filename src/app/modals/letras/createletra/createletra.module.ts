import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateletraPageRoutingModule } from './createletra-routing.module';

import { CreateletraPage } from './createletra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateletraPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreateletraPage]
})
export class CreateletraPageModule {}
