import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from "rxjs";
import { User } from "src/Model/user";

@Injectable({
  providedIn: 'root' // or specify a module if not provided in root
})

export class UserService {
  url = 'http://localhost:3000/users';

  deletelist!:User[];

  constructor(private http: HttpClient) { };

  //error handling methods
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  //get all user from server
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url)
      .pipe(
        catchError(this.handleError<User[]>('getUsers', []))
      );
  }


  /** GET User by id. Will 404 if id not found */
  getUserById(id: number): Observable<User> {
    const url = `${this.url}/${id}`;
    return this.http.get<User>(url).pipe(
      tap(_ => console.log(`fetched hero id=${id}`)),
      catchError(this.handleError<User>(`getHero id=${id}`))
    );
  }

  /** POST: add a new hero to the server */
  adduser(user: User): Observable<User> {
    return this.http.post<User>(this.url, user).pipe(
      tap((newHero: User) => console.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<User>('addHero'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteuser(id: number): Observable<User> {
    const url = `${this.url}/${id}`;

    return this.http.delete<User>(url).pipe(
      tap(_ => console.log(`deleted hero id=${id}`)),
      catchError(this.handleError<User>('deleteHero'))
    );
  }

  /** PUT: update the hero on the server */
  updateuser(user: User): Observable<any> {
    console.log(user)
    const newurl = `${this.url}/${user.id}`;
    return this.http.put(newurl, user,this.httpOptions).pipe(
      tap(_ => console.log(`updated hero id=${user.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }
  // async getAllUsers(): Promise<User[]> {
  //     const data = await fetch(this.url);
  //     return await data.json() ?? [];
  //   }

  // async getUserById(id: number): Promise<User> {
  //   // console.log(id)
  //   const data = await fetch(`${this.url}/${id}`);
  //   return await data.json() ?? {};
  // }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }

}