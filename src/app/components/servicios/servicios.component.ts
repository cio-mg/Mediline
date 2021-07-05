import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  //@ViewChild('formulario')formulario!;
  form!:FormGroup;
  constructor(
    private formBuilder:FormBuilder
  ) { 
    this.formulario();
  }

  persona={
    genero:'F'
  }

formulario(){
this.form=this.formBuilder.group({
  prueba: ['',[Validators.required]],
  fecha: ['',[Validators.required]],
  hora:['',[Validators.required]],
  nombre: ['',[Validators.required]],
  apellidopaterno: ['',[Validators.required]],
  apellidomaterno: ['',[Validators.required]],
  nacimiento:['',[Validators.required]],
  cp:['',[Validators.required]],
  colonia:['',[Validators.required]],
  calle:['',[Validators.required]],
  numdir:['',[Validators.required]],
  correo: ['',[Validators.required]],
  tel:['',[Validators.required]],
  genero:['',[Validators.required]],
});
}
  ngOnInit(): void {
  }
Guardar(){
console.log(this.form.value);
this.form.reset();
}
}
