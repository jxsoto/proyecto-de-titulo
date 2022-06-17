import { Component, OnInit } from '@angular/core';
import { ProductosService } from '@app/shared/services/productos.service';
import { productos } from '@app/shared/interfaces/productos.interface';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.scss']
})
export class SeccionComponent implements OnInit {
  cartas:productos[]=[];
  constructor(private api:ProductosService) { }

  ngOnInit(): void {

    this.api.allProductos().subscribe(data => {this.cartas=data});

  }

}
