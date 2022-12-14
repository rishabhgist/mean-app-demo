import { HttpClient } from '@angular/common/http';
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
    this.http.get<{message:string, posts: Post[]}>('http://localhost:3000/api/posts').subscribe((postData) => {
      this.posts = postData.posts;
      this.postUpdate.next([...this.posts]);
    });
  }
  getPostUpdateListner() {
    return this.postUpdate.asObservable();
  }
  addPost(post: Post) {
    this.http.post<{ message: string }>('http://localhost:3000/api/posts', post).subscribe((res) => {
      console.log(res.message);
      this.posts.push(post);
      this.postUpdate.next([...this.posts]);
    })
  }
  constructor(private http:HttpClient) { }
}
