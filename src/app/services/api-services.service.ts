import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { clafication } from '../interfaces/clasification.interfaces';


@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private http: HttpClient) { }



  getItenClasification(){

  
    return this.http.get<clafication>('https://test.defontana.com')
    .pipe(map((resp) =>{
      return resp.data;
      
    }))
  }
  
}