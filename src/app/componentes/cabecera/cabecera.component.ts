import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms'



@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {

  formulario:FormGroup;

  constructor(public form:FormBuilder) { 

    this.formulario=form.group({

      buscador: ["",Validators.required]

    })

  }

  ngOnInit(): void {
  }

}

