import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../../../services/api-services.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  
  public animals1: any;
  public animals2: any;
  
  mostrar: boolean = false;

  constructor(private api: ApiServicesService) { }

  ngOnInit(): void {
    this.api.getItenClasification()
    .subscribe( resp => {
      const result1 = resp.filter( valor => valor.ID == '21');
      this.animals1 = result1
      const result2 = resp.filter( valor => valor.ID == '22');
      this.animals2 = result2
      
 
      
    });
  }

}
 