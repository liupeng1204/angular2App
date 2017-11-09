import { Component } from '@angular/core';
import {Article} from "./article/article.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  articles: Article[];

  constructor(){
    this.articles = [
      new Article("Angular2", "http://angular.io", 50),
      new Article("Fullstack", "http://fullctack.io", 40),
      new Article("Annglar HomePage", "http://angular.io", 55)
    ]
  }

  // 基于投票数降序排序(顺序会根据投票数动态改变)
  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes)
  }
}
