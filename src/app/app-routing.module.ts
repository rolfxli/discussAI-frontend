import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {StreamComponent} from './stream/stream.component';
import {StreamVideoComponent} from './stream-video/stream-video.component';
import {ChatComponent} from './chat/chat.component'

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'stream', component: StreamComponent}, // StreamComponent
  {path: 'streamVideo', component: StreamVideoComponent},
  {path: 'chat', component: ChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
