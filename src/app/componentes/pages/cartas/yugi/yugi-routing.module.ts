import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YugiComponent } from './yugi.component';

const routes: Routes = [{ path: '', component: YugiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YugiRoutingModule { }
