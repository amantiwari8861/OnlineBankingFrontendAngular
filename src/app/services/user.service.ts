import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders,
  } from '@angular/common/http';
import { User } from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

    usersUrl = 'http://localhost:9090/users';
  options = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) {}
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl).pipe(
      tap((data: any) => console.log('Data Fetched:' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  addUser(user: User): Observable<any> {
    return this.http
      .post(this.usersUrl, user, {
        headers: this.options,
      })
      .pipe(catchError(this.handleError));
  }
  updateUser(user: User): Observable<any> {
    // const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .put<any>(this.usersUrl, user, {
        headers: this.options,
      })
      .pipe(
        tap((_: any) => console.log(`updated User id=${user.userId}`)),
        catchError(this.handleError)
      );
  }
  deleteUser(userId: number): Observable<any> {
    const url = `${this.usersUrl}/${userId}`;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }
  private handleError(err: HttpErrorResponse): Observable<any> {
    let errMsg = '';
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', err.error.message);
      errMsg = err.error.message;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(`Backend returned code ${err.status}`);
      errMsg = err.error.status;
    }
    return throwError(() => errMsg);
  }
}
