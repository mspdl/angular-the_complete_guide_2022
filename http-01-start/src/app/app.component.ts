import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Post } from "./post.model";
import { PostsService } from "./posts.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isLoading = false;
  error = null;
  showMoreErrorDetails = false;
  private errorSub: Subscription;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.errorSub = this.postsService.error.subscribe((errorMessage) => {
      this.error = errorMessage;
    });

    this.isLoading = true;
    this.postsService.fetchPosts().subscribe(
      (posts) => {
        this.isLoading = false;
        this.loadedPosts = posts;
      },
      (error) => {
        this.isLoading = false;
        this.error = error;
      }
    );
  }

  onCreatePost(postData: Post) {
    this.postsService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    this.isLoading = true;
    this.postsService.fetchPosts().subscribe(
      (posts) => {
        this.isLoading = false;
        this.loadedPosts = posts;
      },
      (error) => {
        this.isLoading = false;
        this.error = error;
      }
    );
  }

  onClearPosts() {
    this.isLoading = true;
    this.postsService.deleteAllPosts().subscribe(() => {
      this.isLoading = false;
      this.loadedPosts = [];
    });
  }

  onDeletePost(id: string) {
    this.isLoading = true;
    this.postsService.deletePost(id).subscribe(() => {
      this.isLoading = false;
      this.loadedPosts = this.loadedPosts.filter((post) => post.id !== id);
    });
  }

  onHandleError(){
    this.error = null;
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }
}
