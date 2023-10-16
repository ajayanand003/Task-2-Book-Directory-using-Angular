import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';
import { Book } from './book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  books: Book[] = [];
  searchQuery: string = '';

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.booksService.getAllBooks().subscribe(books => {
      this.books = books;
    });
  }

  onSearch() {
    this.booksService.getAllBooks().subscribe(books => {
      this.books = books.filter(book => book.title.includes(this.searchQuery));
    });
  }
}
