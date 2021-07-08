import { Component, OnInit } from '@angular/core';
import { CovidInfoModel } from 'src/app/models/covidMapInfo.model';
import { CovidService } from '../../auth/services/covid.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
  
  //coviMapData: CovidInfoModel[] = [];
  coviMapData: any[] = []
  lat = 16.002082 ;
  lng = -24.013197;
  
  ngOnInit(): void {
    this.getCovidData();
  }

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
   /* private getCovidData(){
    this.covideService.getCovidInfoToMap(
       "https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/latest"
    )
      .subscribe( response => {
        this.coviMapData.push( response);
        console.log(this.coviMapData)

      } );
  }*/
  constructor(
    private covideService: CovidService,
  ) {

    /*const nuevoMarcador = new CovidInfoModel (51.678418, 7.809007);
   this.coviMapData.push(nuevoMarcador);
   */
    if(localStorage.getItem('Marcador')){
     this.coviMapData=JSON.parse(localStorage.getItem('Marcador')!);
   
    }
  }

agregar(evento:any){
  const coords: { lat:number, lng:number}= evento.coords;
  const nuevoMarcador = new CovidInfoModel(coords.lat, coords.lng);
  this.coviMapData.push(nuevoMarcador);
  this.guardarStorage();

}

guardarStorage(){
  localStorage.setItem('Marcador',JSON.stringify(this.coviMapData));
}
iconMap={
  iconUrl:"./assets/img/circuloo.svg",
  scaleSize:{
    width:40,
    height:60
  }
  
}
}


  // Esto lo puedes mover de posicion de este archivo segun tu conveniencia, 
  // asi como el llamado de esta funcion. Yo lo dejare en el constructor. Con el curso de fernando h sabras a que me refiero
  // el metodo de abajo extrae toda la data que ocupas y en el video te dice como mostrar esa data
  // tendras que usar ngfor para imprimer todos, los 279 registros que te regresa
  // por ejemplo asi, solo que lo haras con marcadores dentro del mapa, igual en el curso dice como