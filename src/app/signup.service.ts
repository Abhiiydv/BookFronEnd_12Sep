import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from './entity/Author';

const MAIN_URL= "http://localhost:9092/create-author";

@Injectable({
  providedIn: 'root'
})
export class SignupService {

 
  save(a : Author): Observable<Object>{
    return this.http.post(MAIN_URL, a);
  }

  constructor(public http: HttpClient) { }
}
