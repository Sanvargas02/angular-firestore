import { Component, OnInit } from '@angular/core';
import Place from 'src/app/interfaces/place.interface';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit {

  places: Place[];

  constructor(
    private placesService: PlacesService
  ) {
    this.places = [{
      name: 'Prueba de sitio',
      description: 'Esto es una prueba',
      latitude: 40,
      longitude: -3,
      image: 'https://media.timeout.com/images/105718969/750/422/image.jpg'
    }];
  }

  //Utilizamos el ngOnInit para Ejecutar código antes de que se muestre al usuario
  ngOnInit(): void {
    //Nos suscribimos al observable de getPlaces
    this.placesService.getPlaces().subscribe(places => {
      this.places = places;
    })
  }

  //Método para Borra los Places
  onClickDelete(place: Place) {
    //Manejo de la promesa
    this.placesService.deletePlace(place)
      .then(response => {console.log(response);})
      .catch(error => {console.log(error)});
  }

}
