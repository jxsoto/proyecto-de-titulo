import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YugiComponent } from './yugi/yugi.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    YugiComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    
  ],
  exports: [YugiComponent]
})
export class CartasModule { }
