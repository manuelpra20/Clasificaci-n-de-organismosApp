import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../../../services/api-services.service';

@Component({
  selector: 'app-fungi',
  templateUrl: './fungi.component.html',
  styleUrls: ['./fungi.component.css']
})
export class FungiComponent implements OnInit {

  public fungi1: any;
  public fungi2: any;
  public fungi3: any;


  constructor(private api: ApiServicesService) { }

  ngOnInit(): void {
    this.api.getItenClasification()
    .subscribe( resp => {
      const result1 = resp.filter( valor => valor.ID == '21');
      this.fungi1 = result1
      const result2 = resp.filter( valor => valor.ID == '22');
      this.fungi2 = result2
      const result3 = resp.filter( valor => valor.ID == '23');
      this.fungi3 = result3
      
 
      
    });
  }

}
