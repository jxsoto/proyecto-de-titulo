import { Component, OnInit } from '@angular/core';
import { ProductosService } from '@app/shared/services/productos.service';
import {productos} from '../../../../shared/interfaces/productos.interface';
import {take } from 'rxjs/operators';


@Component({
  selector: 'app-yugi',
  templateUrl: './yugi.component.html',
  styleUrls: ['./yugi.component.scss']
})
export class YugiComponent implements OnInit {
  cartas:productos[]=[];
  private query: string="";
  
  constructor(private productosSvc:ProductosService) { }

  ngOnInit(): void {
  }
  private getDataFromService():void{
    this.productosSvc.searchProductos(this.query)
    .pipe(
      take(1)
      ).subscribe((res:any) => {
        const {data} =res;
        this.cartas = [...this.cartas, ...data]
      }   )
      
  }
}
