import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Route, Router } from '@angular/router';
import { BookService } from 'src/app/book.service';
import { Author } from 'src/app/entity/Author';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;

  st : boolean = true;

 if(st){

 

 }
 
 au : Author = new Author();
 auName:string;
 login(){

  console.log("bhaskar");
  console.log(this.au);
  const observable= this.bserv.getLogin(this.au);
  
observable.subscribe((response)=>{
  console.log(response);
  console.log(this.au);

  if(response==null){
    this.router.navigate(['/home']);
    this.auName = this.au.authorName;
  }
  else
  this.router.navigate(['/author-dashboard']);
  
},
function(error){
  console.log(error);
  alert("Something wrong");
}
)
}



  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  constructor(private bserv: BookService , private router : Router) { }

  ngOnInit(): void {
  }

}
