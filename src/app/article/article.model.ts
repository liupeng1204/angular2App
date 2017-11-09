import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: []
})
export class Article {
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes?: number) {
    this.title= title;
    this.link= link;
    this.votes= votes || 0;
  }

  voteUp(): boolean{
    this.votes += 1;
    return false;
  }

  voteDown(): boolean{
    this.votes -= 1;
    return false;
  }
}
