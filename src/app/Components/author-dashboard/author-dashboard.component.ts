import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import { Book } from 'src/app/entity/book';



@Component({
  selector: 'app-author-dashboard',
  templateUrl: './author-dashboard.component.html',
  styleUrls: ['./author-dashboard.component.css']
})
export class AuthorDashboardComponent implements OnInit {

  
  books: Book[] = [];
  name:string;


  b={
    bookId:0,
    authorId:0,
    title:"",
    authorName:"",
    category:"",
    price: 0,
    content: "",
    publishedDate:"",
    publisher: "",
    logo: "",
    bookStatus: ''

  }

  getRecords(obj) {
    this.b = obj;
    console.log("recordss");
    console.log(this.b);
  }

  getyourBooks(name: string){

    const promise = this.bs.searchbyAuthorname(name);
    promise.subscribe((response) => {
      console.log(response);
      console.log("abhishek entered below")
      console.log(name);
      this.books = response as Book[];

    })
  
  }

  // deleteStudent(studentRoll: number) {
  //   this.bs.d(studentRoll).subscribe(response => {
  //     console.log(response);
  //     this.ngOnInit();
  //     alert("Deleted successfully!");

  //   },
  //     function (error) {
  //       console.log(error);
  //       alert("Something went wrong!");
  //     }

  //   )

  // }

  constructor(public bs : BookService) { }

  ngOnInit(): void {
  }

}
