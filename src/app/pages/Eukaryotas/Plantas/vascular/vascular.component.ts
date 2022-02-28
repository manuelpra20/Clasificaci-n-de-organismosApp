import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../../../../services/api-services.service';

@Component({
  selector: 'app-vascular',
  templateUrl: './vascular.component.html',
  styleUrls: ['./vascular.component.css']
})
export class VascularComponent implements OnInit {
 
  public vascular1: any;
  public vascular2: any;
  


  constructor(private api: ApiServicesService) { }

  ngOnInit(): void {
    this.api.getItenClasification()
    .subscribe( resp => {
      const result1 = resp.filter( valor => valor.ID == '17');
      this.vascular1 = result1
      const result2 = resp.filter( valor => valor.ID == '18');
      this.vascular2 = result2
      
 
      
    });
  }

}
 