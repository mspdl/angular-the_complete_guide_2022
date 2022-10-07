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
  error = null;
  showMoreErrorDetails = false;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.postsService.fetchPosts().subscribe(
      (posts) => {
        this.isLoading = false;
        this.loadedPosts = posts;
      },
      (error) => {
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
}
