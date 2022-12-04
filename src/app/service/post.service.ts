import { Injectable } from '@angular/core';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [];

  
  getPost() {
    return [...this.posts];
  }

  addPost(post: Post) {
    this.posts.push(post);
  }
  
  constructor() { }
}
