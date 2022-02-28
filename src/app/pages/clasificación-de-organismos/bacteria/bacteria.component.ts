import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../../../services/api-services.service';

@Component({
  selector: 'app-bacteria',
  templateUrl: './bacteria.component.html',
  styleUrls: ['./bacteria.component.css']
})
export class BacteriaComponent implements OnInit {

 
  public bacteria1: any;
  public bacteria2: any;
  public bacteria3: any;
  public bacteria4: any;



  constructor(private api: ApiServicesService) { }

  ngOnInit(): void {
    this.api.getItenClasification()
    .subscribe( resp => {
      const result1 = resp.filter( valor => valor.ID == '7');
      this.bacteria1 = result1
      const result2 = resp.filter( valor => valor.ID == '8');
      this.bacteria2 = result2
      const result3 = resp.filter( valor => valor.ID == '9');
      this.bacteria3 = result3
      const result4 = resp.filter( valor => valor.ID == '10');
      this.bacteria4 = result4
      
      
 
      
    });
  }

}
