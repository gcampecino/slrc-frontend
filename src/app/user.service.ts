import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './user';
import { USERS } from './mock-users';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'http://localhost:8000/api/users';  // URL to web api

  constructor(private http: HttpClient, private notificationService: NotificationService) { }

  getUsers(): Observable<User[]> {
    this.notificationService.add('UserService: fetched users');
    return this.http.get<User[]>(this.usersUrl);
  }

  /** Log a UserService message with the NotificationService */
  private log(notification: string) {
    this.notificationService.add(`UserService: ${notification}`);
  }

}
