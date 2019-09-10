import { Component } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Observable method';
  softBooks: Book[];
  constructor(private bookservice: BookService) {}

  ngOnInit() {
    this.getsoftBooks();
  }
  getsoftBooks() {
    this.bookservice.getBooksFromStore().subscribe(books=>this./this.softBooks=books);
  }
}
