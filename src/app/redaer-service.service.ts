import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Reader from './entity/Reader';



const BASE_URL = "http://localhost:9094/purhase/";


@Injectable({
  providedIn: 'root'
})
export class RedaerServiceService {

  orderBook(r: Reader) {

    return this.http.post(BASE_URL, r);


  }

  constructor(private http: HttpClient) { }
}
