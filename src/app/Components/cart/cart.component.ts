import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Book } from 'src/app/entity/book';
import BuyBook from 'src/app/entity/BuyBook';
import { RedaerServiceService } from 'src/app/redaer-service.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  buyBook: BuyBook = new BuyBook();



  readerName:string;
  redaerEmail:string;
  totalvalue: number;
  totalCartPrice: number;

  saveReaderDetails(buyBook) {
    this.books = this.cartService.getItems();
 

    for (let i = 0; i < this.books.length; i++) {
      buyBook.bookId = this.books[i].bookId;
      buyBook.price = this.books[i].price;

      this.orderBook(buyBook);
    }
    console.log(buyBook);

    // this.orderBook(buyBook);

  }


  orderBook(buyBook) {
    console.log(buyBook);
    const observable = this.readerService.orderBook(buyBook);


    observable.subscribe((response) => {
      console.log(response);
      window.location.href = "/read"
    },
      function (error) {
        console.log(error);
        alert("Something went wrong");
      }
    );


  }

  getTotalCartValue(){
    let total = 0;
    for (var i = 0; i < this.books.length; i++) {
        if (this.books[i].price) {
          total += this.books[i].price ;
            this.totalCartPrice = total;
        }
    }
    console.log(total);
    
    return total;
}




  dupli : any;
 
  books = this.cartService.getItems();

  

  getRecords(ss:Book) {
    this.dupli = ss;
    console.log("recordss");
    console.log(ss);
    
  }

  if(books){
    
  }
  
  constructor( private cartService: CartService , private readerService: RedaerServiceService ) { }

  ngOnInit(): void {

    this.dupli = this.cartService.getItems();
    
  }

}
