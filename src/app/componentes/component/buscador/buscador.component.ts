import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ProductosService } from '@app/shared/services/productos.service';
import { productos } from '@app/shared/interfaces/productos.interface';

@Component({
  selector: 'app-buscador',
  template: `
    <input 
    #inputSearch
    autofocus
    type="text"
    class="form-control-lg"
    placeholder="buscar"
    (keyup)="buscarProductos(inputSearch.value)"
  />`,

  styles: ['input {width:100%}'],
})
export class BuscadorComponent implements OnInit {

  cartas:productos[]=[];

  constructor(private api:ProductosService) { }

  ngOnInit(): void {
    

  }

   buscarProductos(value:string){
    //
    if(value){
      this.api.searchProductos(value).subscribe(data => {this.cartas=data});
      console.log(this.cartas);
    }
  
  }
}
