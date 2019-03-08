import { Injectable } from '@angular/core';
import { NotifcationService } from './services/notifcation.service';

@Injectable({ providedIn: 'root' })
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
