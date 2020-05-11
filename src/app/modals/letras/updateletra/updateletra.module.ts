import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateletraPageRoutingModule } from './updateletra-routing.module';

import { UpdateletraPage } from './updateletra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateletraPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdateletraPage]
})
export class UpdateletraPageModule {}
