import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Book} from "../model/book.model";

const baseUrl = 'http://localhost:8080/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(baseUrl);
  }

  get(isbn: any): Observable<Book> {
    return this.http.get<Book>(`${baseUrl}/${isbn}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(isbn: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${isbn}`, data);
  }

  delete(isbn: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${isbn}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Book[]> {
    return this.http.get<Book[]>(`${baseUrl}?title=${title}`);
  }
}
