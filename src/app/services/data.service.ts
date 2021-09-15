import { Injectable } from '@angular/core';
import { Tramite } from '../models/tramite';


@Injectable({
  providedIn: 'root'
})
export class DataService  {
public tramites: Tramite[]= [];

}
