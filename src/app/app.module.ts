import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { CentrosmComponent } from './components/centrosm/centrosm.component';
import { PreguntasfComponent } from './components/preguntasf/preguntasf.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ServiciosComponent,
    EstadisticasComponent,
    CentrosmComponent,
    PreguntasfComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCgjm2ESIbG95kPuuBy2p6-SuFXXOF5wgI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
