import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Book} from "../model/book.model";
import {environment} from "../../environment";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl = environment.booksAPI;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl);
  }

  get(isbn: any): Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}/${isbn}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  update(isbn: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${isbn}`, data);
  }

  delete(isbn: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${isbn}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }

  findByTitle(title: any): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}?title=${title}`);
  }
}
