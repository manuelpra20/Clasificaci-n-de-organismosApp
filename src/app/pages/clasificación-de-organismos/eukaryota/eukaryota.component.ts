import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../../../services/api-services.service';

@Component({
  selector: 'app-eukaryota',
  templateUrl: './eukaryota.component.html',
  styleUrls: ['./eukaryota.component.css']
})
export class EukaryotaComponent implements OnInit {

 
  public eukaryota1: any;
  public eukaryota2: any;
  public eukaryota3: any;
  public eukaryota4: any;
 
  mostrar: boolean = false;
  mostrar1: boolean = false;
  mostrar2: boolean = false;
  

  constructor(private api: ApiServicesService) { }

  ngOnInit(): void {
    this.api.getItenClasification()
    .subscribe( resp => {
      const result1 = resp.filter( valor => valor.ID == '11');
      this.eukaryota1 = result1
      const result2 = resp.filter( valor => valor.ID == '12');
      this.eukaryota2 = result2
      const result3 = resp.filter( valor => valor.ID == '13');
      this.eukaryota3 = result3
      const result4 = resp.filter( valor => valor.ID == '14');
      this.eukaryota4 = result4
      
 
      
    });
  }

}
