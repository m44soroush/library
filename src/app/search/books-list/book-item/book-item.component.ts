import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../../shared/book.model";
import {BookService} from "../../../shared/book.service";

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input('getBook') book:Book;
  @Input() index:number;
  @Input() btnShow:boolean=true;

  hover:boolean=false;

  onHover(){
    if(this.btnShow){

      if(this.hover) {
        this.hover = false;
      }else {
      this.hover=true;
  }}}

  constructor(private bookService:BookService) { }

  ngOnInit() {

  }

  onDelete(){
    this.bookService.deleteBook(this.index);
  }

}
