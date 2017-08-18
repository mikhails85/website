import { Component } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  pageTitle = 'Home';
  constructor(meta: Meta, title: Title) {

      title.setTitle(this.pageTitle);

      meta.addTags([
        { name: 'author',   content: 'Coursetro.com'},
        { name: 'keywords', content: 'angular seo, angular 4 universal, etc'},
        { name: 'description', content: 'This is my Angular SEO-based App, enjoy it!' }
      ]);

  }
}
