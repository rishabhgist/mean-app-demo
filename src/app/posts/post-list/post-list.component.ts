import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/service/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  constructor(private postService: PostService) { }
  ngOnDestroy(): void {
    if (this.postSub) {
      this.postSub.unsubscribe();
    }
  }
  
  posts: Post[] = [];
  private postSub: Subscription | undefined;

  ngOnInit(): void {
    this.posts = this.postService.getPost();
    this.postSub = this.postService.getPostUpdateListner().subscribe((posts:Post[]) => {
      this.posts = posts;
    });
  }
}
