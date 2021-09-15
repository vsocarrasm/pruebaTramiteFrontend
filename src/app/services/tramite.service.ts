import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";
import { GenericService } from './generic.service';
import { Tramite } from '../models/tramite';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';
import { isUndefined } from 'util';
@Injectable({
  providedIn: 'root'
})
export class TramiteService extends GenericService {
 //  url: string;
  constructor(private http: HttpClient) {
    super(http);
    this.apiURL = environment.apiUrlTramite;
       
  }

 

  public consultarTramites(): Observable<Tramite[]> {
         console.log("url: "+this.apiURL);
     
    return this.http.get<Tramite[]>(this.apiURL);
  }
  

 
}
