import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import {Users} from "./users";

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})

export class UsersService {
    constructor(private http: HttpClient) {
    }

    private static getUrl(path: any = ''): string {
        return `api/users/${path}`;
    }

    public getUsers(): Observable<Users[]> {
        return this.http.get<Users[]>(UsersService.getUrl()).pipe(
            tap(_ => console.log('fetched heroes')),
            catchError(this.handleError<Users[]>('getHeroes', []))
        );
    }

    public getUser(id: number): Observable<Users> {
        return this.http.get<Users>(UsersService.getUrl(id)).pipe(
            tap(_ => console.log(`fetched hero id=${id}`)),
            catchError(this.handleError<Users>(`getHero id=${id}`))
        );
    }

    public updateUser(user: Users | undefined): Observable<any> {
        return this.http.put(UsersService.getUrl(), user, httpOptions).pipe(
            tap(_ => console.log(`updated hero id=${user?.id}`)),
            catchError(this.handleError<any>('updateHero'))
        );
    }

    public deleteUser(user: Users | undefined): Observable<any> {
        return this.http.put(UsersService.getUrl(), user, httpOptions).pipe(
            tap(_ => console.log(`deleted hero id=${user?.id}`)),
            catchError(this.handleError<Users>('deleteHero'))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);

            return of(result as T);
        };
    }

}
