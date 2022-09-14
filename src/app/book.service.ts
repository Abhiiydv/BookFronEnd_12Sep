import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const MAIN_URL= "http://localhost:9092/";
const BASE_URL = "http://localhost:9092/savebook"
const SEARCHBYCate ="http://localhost:9092/books/category/search?category=";
const searchbyAuthorname ="http://localhost:9092/books/author/search?authorName=";
const SearchByPublisher="http://localhost:9092/books/publisher/search?publisherName=";

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
  searchbyCategory(enteredValue1: string): Observable<Object> {
    return this.http.get(SEARCHBYCate + enteredValue1);

  }
  searchbyAuthorname(enteredValue2: string): Observable<Object> {
    return this.http.get(searchbyAuthorname + enteredValue2);
  }

  searchbyPublisher(enteredValue3: string): Observable<Object> {
    return this.http.get(SearchByPublisher + enteredValue3);

  }
  constructor(public http: HttpClient) { }
}
