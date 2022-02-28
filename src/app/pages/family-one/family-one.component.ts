import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../../services/api-services.service';

@Component({
  selector: 'app-family-one',
  templateUrl: './family-one.component.html',
  styleUrls: ['./family-one.component.css']
})
export class FamilyOneComponent implements OnInit {

  public archaea: any;
  public eukaryota: any;
  public bacteria: any;

  mostrar: boolean = false;
  mostrar1: boolean = false;
  mostrar2: boolean = false;


  constructor( private api: ApiServicesService ) { }

  ngOnInit(): void {
    
  
    this.api.getItenClasification()
    .subscribe( resp => {
      const result1 = resp.filter( valor => valor.ID == '2');
      this.archaea = result1
      const result2 = resp.filter( valor => valor.ID == '1');
      this.eukaryota = result2
      const result3 = resp.filter( valor => valor.ID == '3');
      this.bacteria = result3
      
      console.log(resp, 'esta es la respuesta');
      
    });

  
  }


}
