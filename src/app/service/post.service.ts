import { Injectable } from '@angular/core';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [];

  
  public get getPost() {
    return this.posts;
  }
  
  constructor() { }
}
