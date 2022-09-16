import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './entity/book';

const MAIN_URL= "http://localhost:9092/";
const BASE_URL = "http://localhost:9092/savebook"
const SEARCHBYCate ="http://localhost:9092/books/category/search?category=";
const searchbyAuthorname ="http://localhost:9092/books/author/search?authorName=";
const SearchByPublisher="http://localhost:9092/books/publisher/search?publisherName=";
const FindActiveBooks=     "http://localhost:9092/books/active";


@Injectable({
  providedIn: 'root'
})
export class BookService {

  createBook(book: Book, uploadedImage: File) {
    const formData = new FormData();
    formData.append('bookstring', JSON.stringify(book));

formData.append('image', uploadedImage);

return this.http.post(BASE_URL, formData);
  }

  getActiveBooks(){
    return this.http.get(FindActiveBooks);
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
