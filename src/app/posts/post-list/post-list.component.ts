import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/service/post.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts = this.postService.getPost();
  }

  posts: Post[] = [];
  
}
