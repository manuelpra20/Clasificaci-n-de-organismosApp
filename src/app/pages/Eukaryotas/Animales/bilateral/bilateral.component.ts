import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../../../../services/api-services.service';

@Component({
  selector: 'app-bilateral',
  templateUrl: './bilateral.component.html',
  styleUrls: ['./bilateral.component.css']
})
export class BilateralComponent implements OnInit {

  public bilateral: any;
  public bilatera2: any;
  public bilatera3: any;
  
  


  constructor(private api: ApiServicesService) { }

  ngOnInit(): void {
    this.api.getItenClasification()
    .subscribe( resp => {
      const result1 = resp.filter( valor => valor.ID == '27');
      this.bilateral = result1
      const result2 = resp.filter( valor => valor.ID == '28');
      this.bilatera2 = result2
      const result3 = resp.filter( valor => valor.ID == '29');
      this.bilatera3 = result3
      
      
 
      
    });
  }

}
 