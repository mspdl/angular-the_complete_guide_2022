import { Component, OnInit } from "@angular/core";
import { Post } from "./post.model";
import { PostsService } from "./posts.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isLoading = false;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.postsService.fetchPosts().subscribe((posts) => {
      this.isLoading = false;
      this.loadedPosts = posts;
    });
  }

  onCreatePost(postData: Post) {
    this.postsService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    this.isLoading = true;
    this.postsService.fetchPosts().subscribe((posts) => {
      this.isLoading = false;
      this.loadedPosts = posts;
    });
  }

  onClearPosts() {
    // Send Http request
  }
}
