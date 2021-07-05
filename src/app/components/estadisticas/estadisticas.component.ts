import { Component, OnInit } from '@angular/core';
import { CovidInfoModel } from 'src/app/models/covidMapInfo.model';
import { CovidService } from '../../auth/services/covid.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  coviMapData: any[] = [];

  constructor(
    private covideService: CovidService,
  ) {
    this.getCovidData();
  }

  // Esto lo puedes mover de posicion de este archivo segun tu conveniencia, 
  // asi como el llamado de esta funcion. Yo lo dejare en el constructor. Con el curso de fernando h sabras a que me refiero
  // el metodo de abajo extrae toda la data que ocupas y en el video te dice como mostrar esa data
  // tendras que usar ngfor para imprimer todos, los 279 registros que te regresa
  // por ejemplo asi, solo que lo haras con marcadores dentro del mapa, igual en el curso dice como
  // esta es tu key para los mapas de google AIzaSyCgjm2ESIbG95kPuuBy2p6-SuFXXOF5wgI

  private getCovidData(){
    this.covideService.getCovidInfoToMap(
      'https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/latest'
    )
      .subscribe( (response: any) => {
        this.coviMapData = response;
        console.log('CovidMapData :>> ', response);
      }, (error) => {
        console.log('error :>> ', error);
      } )
  }

  ngOnInit(): void {
  }

}
