import { Component, OnInit } from '@angular/core';
import { ProductosService } from '@app/shared/services/productos.service';
import { productos } from '@app/shared/interfaces/productos.interface';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  cartas:productos[]=[];
  //arreglo:Array<[productos]>=[];
  constructor(private api:ProductosService) { }

  ngOnInit(): void {
    

  }
   cartasFinal: any;
  cartasCount = 0;

   buscarProductos(value:string){
    
    if(value){
      this.api.searchProductos(value).subscribe((cartas: any) => {
        this.cartas = cartas.data;
        this.cartasCount = this.cartas.length;
        console.table(this.cartas);

        });
      return
    }
  }
}