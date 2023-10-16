//Create endpoints


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('assets/books.json');
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`assets/books.json/${id}`);
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>('assets/books.json', book);
  }

  updateBook(id: number, book: Book): Observable<Book> {
    return this.http.put<Book>(`assets/books.json/${id}`, book);
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`assets/books.json/${id}`);
  }
}
