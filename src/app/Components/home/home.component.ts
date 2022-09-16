import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/book.service';
import { CartService } from 'src/app/cart.service';
import { Book } from 'src/app/entity/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: Book[] = [];
  constructor(public bookServ: BookService , private route: ActivatedRoute,
    private cartService: CartService) { }
    addToCart(product: Book) {
      this.cartService.addToCart(product);
      window.alert('Your product has been added to the cart!');
    }
  ngOnInit(): void {
    const promise = this.bookServ.getActiveBooks();
    promise.subscribe((response) => {
      console.log(response);
      this.books = response as Book[];
      console.log(this.books);
  })
    
  }

}
