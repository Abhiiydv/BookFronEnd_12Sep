import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from './entity/Author';
import { Book } from './entity/book';

const MAIN_URL = "http://localhost:9092/";
const BASE_URL = "http://localhost:9092/savebook"
const SEARCH_BY_Category = "http://localhost:9092/books/category/search?category=";
const SEARCH_BY_AuthorName = "http://localhost:9092/books/author/search?authorName=";
const SEARCH_BY_Publisher = "http://localhost:9092/books/publisher/search?publisherName=";
const FindActiveBooks = "http://localhost:9092/books/active";
const SEARCH_BY_ANYTHING = "http://localhost:9092/searchbooks/?query=";
const UPDATE_BOOK_BY_BOOKID ="http://localhost:9092/books/update/";
const DELETE_BY_BOOKID ="http://localhost:9092/books/delete/";
const login_url ="http://localhost:9092/login";

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

  getActiveBooks() {
    return this.http.get(FindActiveBooks);
  }

  getBookslist() {
    return this.http.get(MAIN_URL + 'books');
  }
  searchbyCategory(enteredValue1: string): Observable<Object> {
    return this.http.get(SEARCH_BY_Category + enteredValue1);

  }
  searchbyAuthorname(enteredValue2: string): Observable<Object> {
    return this.http.get(SEARCH_BY_AuthorName + enteredValue2);
  }

  searchbyPublisher(enteredValue3: string): Observable<Object> {
    return this.http.get(SEARCH_BY_Publisher + enteredValue3);

  }
   
  getLogin(a : Author)
  {

    return this.http.post(login_url, a);
    
  }


  searchbyAnything(query: string): Observable<Object> {
    return this.http.get(SEARCH_BY_ANYTHING + query);
  }


  updateBookById(id:number){
    this.http.put(UPDATE_BOOK_BY_BOOKID,id);
    }

    deleteBookByBookId( bookId  ): Observable<Object>
    {
      return this.http.delete(DELETE_BY_BOOKID+ bookId);
     }

  constructor(public http: HttpClient) { }
}
