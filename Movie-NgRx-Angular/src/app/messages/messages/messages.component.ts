import { Component } from '@angular/core';
import { MessageService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent  {

  constructor(public _messageService: MessageService) {}

}
