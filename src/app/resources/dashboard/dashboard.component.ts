import { Component, OnInit } from '@angular/core';
import {Book} from "../../shared/book.model";
import {BookService} from "../../shared/book.service";
import {DashboardListStateTrigger} from "./animation";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    DashboardListStateTrigger
  ]
})
export class DashboardComponent implements OnInit {

  books:Book[];

  constructor(private bookService:BookService) { }

  ngOnInit() {

    this.bookService.booksChanged.subscribe(
      (books:Book[])=>{
        this.books=books.slice(0,2);
      }
    );
    this.books=this.bookService.getLast().slice(0,2);
  }

}
