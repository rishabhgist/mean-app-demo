import { Component } from '@angular/core';
import { Post } from './model/post';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts:Post [] = [];
  onPostAdded(post:Post) {
    this.posts.push(post);
  }
}
