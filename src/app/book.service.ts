import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const MAIN_URL= "http://localhost:9092/";
const BASE_URL = "http://localhost:9092/savebook"

@Injectable({
  providedIn: 'root'
})
export class BookService {

  createBook(book:
    {
      authorId: number;
      title: string;
      authorname: string;
      category: string;
      price: number;
      content: string;
      publisher: string;
      publishedDate: string;
      logo: string;
      Active: boolean;
     
    }) {
    return this.http.post(BASE_URL, book);
  }
  getBookslist() {
    return this.http.get(MAIN_URL + 'books');
  }

  constructor(public http: HttpClient) { }
}
