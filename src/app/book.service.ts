import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


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

  constructor(public http: HttpClient) { }
}
