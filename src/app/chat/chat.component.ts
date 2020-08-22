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
  link: string;
  page: string;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
  }

  onSendMessage(message: string) {
    this.question = message;
    console.log(message);

    //this.link = "http";
    //this.page = "50";

    this.chatService.getAnswer(this.question)
      .subscribe(data => {
        console.log(data);
        this.link = data.body.link;
        this.page = data.body.page.toString();
    }, error => {console.log("There was as error: " + error)})
  }
}
