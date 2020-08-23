import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { NgxAgoraModule, AgoraConfig } from 'ngx-agora';
import { HomeComponent } from './home/home.component';
import { StreamComponent } from './stream/stream.component';
import { ButtonComponent } from './button/button.component';
import { MainComponent } from './main/main.component';
import { StreamVideoComponent } from './stream-video/stream-video.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatComponent } from './chat/chat.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const agoraConfig: AgoraConfig = {
  AppID: 'd83866456f8948c39c5fca40707f337c',
}; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StreamComponent,
    ButtonComponent,
    MainComponent,
    StreamVideoComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxAgoraModule.forRoot(agoraConfig),
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 