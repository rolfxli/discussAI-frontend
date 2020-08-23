import { Component, Input, OnInit } from '@angular/core';
import { ChatService } from "../chat.service";
import { Answer } from "../models/answer";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  // contains the sent messages
  question: string;
  link: string = null;
  page: number = null;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
  }

  onSendMessage(message: string) {
    this.question = message;
    console.log(message);

    this.chatService.getAnswer(this.question)
      .subscribe(data => {
        console.log(data);
        this.link = data[0].link;
        this.page = data[0].page;
    }, error => {console.log("There was an error: " + error)})
  }
}
