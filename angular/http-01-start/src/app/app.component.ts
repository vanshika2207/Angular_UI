import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { PostService } from './post.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  private errorSub: Subscription;
  constructor(private http: HttpClient, private postservice: PostService) {}

  ngOnInit() {
    // Send Http request
    this.errorSub = this.postservice.error.subscribe((errorMessage) => {
      this.error = errorMessage;
    });

    this.postservice.fetchpost().subscribe(
      (posts) => {
        this.isFetching = false;
        this.loadedPosts = posts;
      },
      (error) => {
        this.error = error.message;
      }
    );
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postservice.createAndStorePost(postData.title, postData.content);

    console.log(postData);
  }

  onFetchPosts() {
    // Send Http request
    this.postservice.fetchpost().subscribe(
      (posts) => {
        this.isFetching = false;
        this.loadedPosts = posts;
      },
      (error) => {
        this.isFetching = false;
        this.error = error.message;
      }
    );
  }

  onClearPosts() {
    // Send Http request
    this.postservice.deletepost().subscribe(() => {
      this.loadedPosts = [];
    });
  }
  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }
  onHandleError() {
    this.error = null;
  }
}
