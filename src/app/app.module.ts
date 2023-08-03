import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modulo de Ruteo
import { AppRoutingModule } from './app-routing.module';

//Formulario
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Firebase
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

//Componentes de mi App
import { AppComponent } from './app.component'; //Principal

import { NewPlaceComponent } from './components/new-place/new-place.component';
import { PlaceListComponent } from './components/place-list/place-list.component';
// import { PlaceMapComponent } from './components/place-map/place-map.component';


@NgModule({
  declarations: [
    AppComponent,
    NewPlaceComponent,
    PlaceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
