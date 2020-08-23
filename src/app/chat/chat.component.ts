import { Component, Input, OnInit } from '@angular/core';
import { ChatService } from "../chat.service";
import { Answer } from "../models/answer";
import { ElementFinder } from 'protractor';

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
    var msg = message.toLowerCase();
    var split = msg.split(' ');
    split.shift();
    this.question = split.join(' ');
    console.log(msg);

    this.chatService.getAnswer(this.question)
      .subscribe(data => {
        console.log(data);
        this.link = data[0].link;
        this.page = data[0].page;
        if (this.link == "") {
          this.page = 0;
          this.question = "No Answer Found"
        }
    }, error => {console.log("There was an error: " + error)})
  }

  getSample(message: string) {
    var msg = message.toLowerCase();
    var split = msg.split(' ');
    split.shift();
    this.question = split.join(' ');
    console.log(msg);

    if (msg == "!ask absolute value") {
      //this.question = "Absolute Value";
      this.link = "https://discussai.blob.core.windows.net/media/abs.png";
      this.page = 1;
    } else if(msg == "!ask triangle inequality") { // broken
      //this.question = "Triangle Inequality";
      this.link = "https://discussai.blob.core.windows.net/media/tri1.PNG";
      this.page = 3;
    } else if(msg == "!ask subsequence") { // broken
      //this.question = "Subsequence";
      this.link = "https://discussai.blob.core.windows.net/media/sub1.png";
      this.page = 17;
    } else if(msg == "!ask tail of a sequence") {
      //this.question = "Tail of a Sequence";
      this.link = "https://discussai.blob.core.windows.net/media/tri2.png";
      this.page = 18;
    } else if(msg == "!ask uniqueness of limits for sequences") {
      //this.question = "Uniqueness of Limits for Sequences";
      this.link = "https://discussai.blob.core.windows.net/media/sub2.png";
      this.page = 27;
    } else {
      this.question = "No Answer Found";
      this.link = "";
      this.page = 0;
    }
  }
}
