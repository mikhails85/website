import { Component } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  title = 'Profile';
  constructor(meta: Meta, title: Title) {

      title.setTitle('Profile');

      meta.addTags([
        { name: 'author',   content: 'Coursetro.com'},
        { name: 'keywords', content: 'angular seo, angular 4 universal, etc'},
        { name: 'description', content: 'This is my Angular SEO-based App, enjoy it!' }
      ]);

  }
}
