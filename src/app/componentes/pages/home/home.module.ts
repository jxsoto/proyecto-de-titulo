import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CartasModule } from '../cartas/cartas.module';
import { YugiModule } from '../cartas/yugi/yugi.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CartasModule,
    YugiModule
  ]
})
export class HomeModule { }
