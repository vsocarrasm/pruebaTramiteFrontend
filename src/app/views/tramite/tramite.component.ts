import { Component, OnInit,Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { Tramite } from '../../models/tramite';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../../services/data.service';
import {Router} from '@angular/router';
import { TramiteService } from '../../services/tramite.service';

@Component({
  selector: 'app-tramite',
  templateUrl: './tramite.component.html',
  styleUrls: ['./tramite.component.css']
})
export class TramiteComponent implements OnInit {

public tramites: Tramite[]=[];
 public claseTitular: string ='hidden';
public msg:string = '';
  constructor(private tramiteService: TramiteService, public dataService:DataService, private router:Router) {  }

  ngOnInit(): void {

this.tramites=this.dataService.tramites;
 console.log("this.tramites: "+this.tramites);
  
	
  }

  public consultar()  {
	this.closeAlert();
	
	console.log("Consultado:");
	    this.claseTitular='';
		  const response =  this.tramiteService.consultarTramites().subscribe(
	       (data) => { // Success
	       
	       console.log("Buen:");
	         this.dataService.tramites=data;
	         this.tramites=this.dataService.tramites;
	         this.claseTitular ='hidden';
	      },
	      (error) => {
		  this.claseTitular ='hidden';
          this.msg = 'Error realizando la consulta, por favor intente nuevamente ';
	        console.error(error);
	      }
	     );
	      console.log("response "+response);
        
   
   
  }

  public salir(){
	
	this.router.navigate(['tramite']); 
   }
   
   closeAlert():void {
    this.msg = '';
  }
}
