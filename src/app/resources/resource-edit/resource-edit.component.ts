import {Component, HostBinding, OnInit} from '@angular/core';
import {BookService} from '../../shared/book.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Book} from '../../shared/book.model';
import {FadingTrigger} from "../../shared/routing-animation";

@Component({
  selector: 'app-resource-edit',
  templateUrl: './resource-edit.component.html',
  styleUrls: ['./resource-edit.component.scss'],
  animations:[
    FadingTrigger
  ]
})
export class ResourceEditComponent implements OnInit {

  @HostBinding('@fading') routAnimation=true;

  bookForm: FormGroup;
  editMode = false;
  id: number;

  constructor(private bookService: BookService,
              private route: ActivatedRoute,
              private router: Router) {
  }


  ngOnInit() {

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  private initForm() {

    let book: Book = new Book('', '', '', '', '', null, new Date().getTime());

    if (this.editMode) {
      book = this.bookService.getBook(this.id);
    }

    this.bookForm = new FormGroup({
      title: new FormControl(book.title, [Validators.required,Validators.minLength(3)]),
      author: new FormControl(book.author, [Validators.required,Validators.minLength(3)]),
      isbn: new FormControl(book.isbn, Validators.required),
      bno: new FormControl(book.bno, Validators.required),
      reference: new FormControl(book.reference, Validators.required),
      pages: new FormControl(book.pages, Validators.required),
      date: new FormControl(new Date(book.date).toISOString().substr(0, 10), Validators.required)
    });

  }

  onSubmit() {

    const book: Book = new Book('', '', '', '', '', null, null);

    book.title = this.bookForm.get('title').value;
    book.author = this.bookForm.get('author').value;
    book.reference = this.bookForm.get('reference').value;
    book.bno = this.bookForm.get('bno').value;
    book.isbn = this.bookForm.get('isbn').value;
    book.pages = +this.bookForm.get('pages').value;
    book.date =Date.parse(this.bookForm.get('date').value);


    if (this.editMode) {
      this.bookService.editBook(this.id, book);
    } else {
      this.bookService.addBook(book);
    }

    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
