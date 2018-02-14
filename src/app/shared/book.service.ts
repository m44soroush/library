import {Book} from "./book.model";
import {Subject} from "rxjs/Subject";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Inject, Injectable, Optional} from "@angular/core";
import "rxjs/add/operator/map";
import {APP_BASE_HREF} from "@angular/common";


@Injectable()
export class BookService {

  booksChanged = new Subject<Book[]>();
  url:string;
  constructor(private http: HttpClient,
              @Optional() @Inject(APP_BASE_HREF) origin: string) {
              this.url=origin;

  }


  private books: Book[] = [
    // new Book("Finding Cinderella: A Novella 1",
    //   "Colleen Hoover",
    //   "Bno", "147677143X",
    //   "reference 1",
    //   48, new Date),
    // new Book("The Time Machine 2",
    //   "H.G. Wells",
    //   "Bno", "1451658869",
    //   "third reference",
    //   176, new Date(2005, 5, 2)),
    // new Book("Thermodynamics in Mineral Sciences: An Introduction 3",
    //   "Ladislav Cemic",
    //   "Bno", "354024364X",
    //   "reference",
    //   386, new Date(2000, 6, 7)),
    // new Book("Finding Cinderella: A Novella 4",
    //   "Colleen Hoover",
    //   "Bno", "147677143X",
    //   "reference 1",
    //   48, new Date),
    // new Book("The Time Machine 5",
    //   "H.G. Wells",
    //   "Bno", "1451658869",
    //   "third reference",
    //   176, new Date(2005, 5, 2)),
  ];

  getBooks() {
    this.http.get('/api/books')
      .subscribe(
        (res:any)=>{
          this.books=<Book[]>(res.books);
          this.booksChanged.next(this.books.slice());
        },
        (e)=>{
          console.log(e);
        }
      );
  }


  getBook(index: number) {
    return this.books[index];
  }

  addBook(book: Book) {

    this.http.post('/api/books',book)
      .subscribe((res:any)=> {
          console.log(res);
        },
        e=>console.log(e)
      );
    this.books.push(book);
    this.booksChanged.next(this.getLast());

  }

  editBook(index: number, book: Book) {
    const _id=this.books[index]._id;
    this.books[index] = book;
    this.booksChanged.next(this.books.slice());

    this.http.patch('/api/books/'+_id,book)
      .subscribe((res:any)=> {
          console.log(res);
        },
        e=>console.log(e)
      );
    this.booksChanged.next(this.books.slice());

  }

  getLast() {
    let count = this.books.length;
    let books: Book[] = [];
    for (let i = count - 1; i > 0; i--) {
      books.push(this.books[i]);
    }
    return books;
  }

  deleteBook(index: number) {
    const _id=this.books[index]._id;

    this.http.delete('/api/books/'+_id)
      .subscribe((res:any)=> {
          this.books.splice(index, 1);
          this.booksChanged.next(this.books.slice());
          console.log(res);
      },
        e=>console.log(e)
        );

  }


}
