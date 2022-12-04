import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  posts: Post[] = [];
  
}
