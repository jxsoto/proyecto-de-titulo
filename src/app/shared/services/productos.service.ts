import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { productos } from '../interfaces/productos.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  url:string="https://db.ygoprodeck.com/api/v7/cardinfo.php"
  constructor(private http: HttpClient) { }

  searchProductos(query=''){
    let direccion = this.url+"?name="+query;
    return this.http.get<productos[]>(direccion);
    
  }

  allProductos(){
    let direccion = this.url;
    return this.http.get<productos[]>(direccion);
  }

  getDetails(id:number){}

  

}
