import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import { Book } from 'src/app/entity/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];

  constructor(public bookServ: BookService) { }

  ngOnInit(): void {
    const promise = this.bookServ.getBookslist();
    promise.subscribe((response) => {
      console.log(response);
      this.books = response as Book[];
      console.log(this.books);
  })
}

}
