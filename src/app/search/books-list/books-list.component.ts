import {Component, OnInit} from '@angular/core';
import {BookService} from "../../shared/book.service";
import {Book} from "../../shared/book.model";
import {ListStateTrigger} from "./animation";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
  animations: [
    ListStateTrigger
  ]


})
export class BooksListComponent implements OnInit {

  constructor(private bookService: BookService) {
  }

  books: Book[]=[];

  ngOnInit() {

    this.bookService.getBooks();

    this.bookService.booksChanged.subscribe(
      (books: Book[]) => {
        this.books = books;
      }
    );


  }


}
