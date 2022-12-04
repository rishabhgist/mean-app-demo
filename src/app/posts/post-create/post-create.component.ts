import { Component, OnInit } from '@angular/core';

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

  newPost = '';
  onAddPost(value:HTMLTextAreaElement) {
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent
    }
  }

}
