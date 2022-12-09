import { Component, OnInit, EventEmitter,Output} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const post:Post = {
      title: form.value.title,
      content:form.value.content
    }
    this.postService.addPost(post);
    form.resetForm();
  }
}
