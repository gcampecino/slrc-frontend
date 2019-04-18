import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  notifications: string[] = [];

  add(message: string) {
    this.notifications.push(message);
  }

  clear() {
    this.notifications = [];
  }
}
