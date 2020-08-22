import { Injectable, EventEmitter, Output} from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Answer } from "./models/answer";
import { Observable } from 'rxjs';

const apiURL = "https://discussai.herokuapp.com/api/ask/";
const apiCall = "/api/ask/"

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  
  constructor(private http: HttpClient) { }

  // GET request returns {link: string, page: int}
  getAnswer(question: string): Observable<HttpResponse<Answer>> {
    return this.http.get<Answer>(apiURL + question, {observe: 'response'});
  }
}
