import { Component, OnInit, EventEmitter,Output} from '@angular/core';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  enteredContent = '';
  enteredTitle = '';
  @Output()
  postCreated = new EventEmitter<Post>();

  newPost = '';
  onAddPost(value:HTMLTextAreaElement) {
    const post:Post = {
      title: this.enteredTitle,
      content: this.enteredContent
    }
    this.postCreated.emit(post);
  }
}
