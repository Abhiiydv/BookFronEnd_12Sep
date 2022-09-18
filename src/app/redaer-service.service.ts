import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import BuyBook from './entity/BuyBook';

const BASE_URL = "http://localhost:9094/purhase/";


@Injectable({
  providedIn: 'root'
})
export class RedaerServiceService {

  orderBook(buyBook: BuyBook) {

    return this.http.post(BASE_URL, buyBook);


  }

  constructor(private http: HttpClient) { }
}
