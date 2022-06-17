import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { SeccionComponent } from './componentes/seccion/seccion.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { ForoComponent } from './componentes/foro/foro.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { IniciosesionComponent } from './componentes/iniciosesion/iniciosesion.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import {LoginComponent} from './pages/auth/login/login.component';


const routes: Routes = [

  {path:"", component:InicioComponent },
  {path:"seccion/:id", component:SeccionComponent},
  {path:"productos/:nombre", component:ProductosComponent},
  {path:"buscar/:filtro/:nombre", component:BuscarComponent},
  {path:"foro/:id", component:ForoComponent},
  {path:"noticia/:id", component:NoticiasComponent},
  {path:"iniciosesion", component:IniciosesionComponent},
  {path:"login", component:LoginComponent},
  {path:"carrito", component:CarritoComponent},
  {path:"carrito/:añadido", component:CarritoComponent},
  

  { path: 'yugi', loadChildren: () => import('./componentes/pages/cartas/yugi/yugi.module').then(m => m.YugiModule) },

  { path: 'home', loadChildren: () => import('./componentes/pages/home/home.module').then(m => m.HomeModule) },

  { path: 'notFounf', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) },

  { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) },

  { path: 'login', loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }