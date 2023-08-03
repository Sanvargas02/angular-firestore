import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import Place from '../interfaces/place.interface';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  //Inyectamos el servicio de Firestore
  constructor(private firestore: Firestore) {

  }

  //Método para guardar los datos del formulario en BD de Firebase
  addPlace(place: Place) {

    //Creamos una referencia a la base de Datos
    const placeRef = collection(this.firestore, 'places'); //La colección la podemos crear desde aquí o ya tenerla en la BD ya creada.

    //Ahora pasamos la referencia al método addDoc para que haga la inserción
    //Además de lo que vamos a insertar que sería en este caso place
    return addDoc(placeRef, place); //Nos retorna una promesa

  }

  //Método para Obtener los datos de la BD
  getPlaces() {}

}
