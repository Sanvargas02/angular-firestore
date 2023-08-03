import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import Place from '../interfaces/place.interface';
import { Observable } from 'rxjs';

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
  getPlaces(): Observable<Place[]> {
    //Creamos una referencia a la base de Datos
    const placeRef = collection(this.firestore, 'places');
    return collectionData(placeRef, { idField: 'id'}) as Observable<Place[]>; //Observable para Actualizar en tiempo real
  }

  //Método para borar los places
  deletePlace(place: Place) {
    //Creamos una referancia al documento, un único documento
    const placeDocRef = doc(this.firestore, `places/${place.id}`); //El id se crea en la base de datos
    return deleteDoc(placeDocRef); //Borramos y retrona una promesa
  }

}
