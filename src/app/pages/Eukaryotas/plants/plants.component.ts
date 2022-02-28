import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../../../services/api-services.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {

  public plants1: any;
  public plants2: any;
  
  mostrar: boolean = false;

  constructor(private api: ApiServicesService) { }

  ngOnInit(): void {
    this.api.getItenClasification()
    .subscribe( resp => {
      const result1 = resp.filter( valor => valor.ID == '21');
      this.plants1 = result1
      const result2 = resp.filter( valor => valor.ID == '22');
      this.plants2 = result2
      
 
      
    });
  }

}
