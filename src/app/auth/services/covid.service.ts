import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class CovidService {
  
    constructor(private http: HttpClient) { }
  
    getCovidInfoToMap(endpoint: string, params?: any): Observable<any> {
      let httpParams = new HttpParams();
      if (params) {
        for (const k in params) {
          if ((params as object).hasOwnProperty(k)) {
            httpParams = httpParams.append(k, params[k]);
          }
        }
      }
      return this.http.get(`${endpoint}`, { params: httpParams });
    }
  }
  