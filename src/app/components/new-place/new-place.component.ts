import { Component, OnInit } from '@angular/core';
import {  FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-new-place',
  templateUrl: './new-place.component.html',
  styleUrls: ['./new-place.component.css']
})
export class NewPlaceComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private placesService: PlacesService, //Inyectamos el Servicio
    fb: FormBuilder // Inyectamos el FormBuilder para formulario Reactivos
  ) {
    this.formulario = fb.group({
      name: ["", Validators.required],
      latitude: ["", Validators.required],
      longitude: ["", Validators.required],
      description: ["", Validators.required],
      image: ["", Validators.required]
    })
  }

  ngOnInit(): void {
  }

  //Método para añadir los lugares a la BD
  onSubmit() {
    console.log(this.formulario.value) //this.formulario.value -> objeto con todos los datos
    //Manejamos la promesa con un async await
    // const response = await this.placesService.addPlace(this.formulario.value);
    // console.log(response);
    this.placesService.addPlace(this.formulario.value)
     .then(response => {console.log(response)})
     .catch(error => {console.log(error)});
    // Después de enviar los datos, puedes limpiar el formulario
    this.formulario.reset();
  }

}
