import {Component, Input, OnInit} from '@angular/core';
import {Article} from "./article.model";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;   // 使用Input配置ArticleComponent
  constructor() {
    // this.article = new Article(
    //   'Angular2',
    //   'http://angular.io',
    //   10);
  }

  // 往Article模型中添加方法之后
  voteUp(): boolean{
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean{
    this.article.voteDown();
    return false;
  }

  ngOnInit() {
  }

}
