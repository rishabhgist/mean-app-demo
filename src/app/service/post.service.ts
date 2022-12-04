import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [];
  private postUpdate = new Subject<Post[]>();
  
  getPost() {
    return [...this.posts];
  }
  getPostUpdateListner() {
    return this.postUpdate.asObservable();
  }
  addPost(post: Post) {
    this.posts.push(post);
    this.postUpdate.next([...this.posts]);
  }
  
  constructor() { }
}
