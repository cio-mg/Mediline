import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { CentrosmComponent } from './components/centrosm/centrosm.component';
import { PreguntasfComponent } from './components/preguntasf/preguntasf.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'servicios',
    component:ServiciosComponent,
    pathMatch:'full'
  },
  {
    path:'estadisticas',
    component:EstadisticasComponent,
    pathMatch:'full'
  },
  {
    path:'centrosm',
    component:CentrosmComponent,
    pathMatch:'full'
  },
  {
    path:'preguntasf',
    component:PreguntasfComponent,
    pathMatch:'full'
  },
  {
    path:'**',
     redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
