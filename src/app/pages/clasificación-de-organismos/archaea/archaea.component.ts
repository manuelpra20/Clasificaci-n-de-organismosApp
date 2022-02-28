import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../../../services/api-services.service';

@Component({
  selector: 'app-archaea',
  templateUrl: './archaea.component.html',
  styleUrls: ['./archaea.component.css']
})
export class ArchaeaComponent implements OnInit {

  public archaea1: any;
  public archaea2: any;
  public archaea3: any;


  constructor(private api: ApiServicesService) { }

  ngOnInit(): void {
    this.api.getItenClasification()
    .subscribe( resp => {
      const result1 = resp.filter( valor => valor.ID == '4');
      this.archaea1 = result1
      const result2 = resp.filter( valor => valor.ID == '5');
      this.archaea2 = result2
      const result3 = resp.filter( valor => valor.ID == '6');
      this.archaea3 = result3
      
 
      
    });
  }

}
