import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormControl, ReactiveFormsModule,FormGroup} from '@angular/forms'

import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { SeccionComponent } from './componentes/seccion/seccion.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { ForoComponent } from './componentes/foro/foro.component';
import { IniciosesionComponent } from './componentes/iniciosesion/iniciosesion.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BuscadorComponent } from './componentes/component/buscador/buscador.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ForumComponent } from './componentes/forum/forum.component';
import {MaterialModule} from '@app/material.module';
import { SidebarModule } from './shared/components/sidebar/sidebar.module';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SeccionComponent,
    BuscarComponent,
    CabeceraComponent,
    CarritoComponent,
    ForoComponent,
    IniciosesionComponent,
    NoticiasComponent,
    ProductosComponent,
    BuscadorComponent,
    ForumComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    SidebarModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
