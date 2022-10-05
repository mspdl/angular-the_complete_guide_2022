import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import { Post } from "./post.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  API_URL = "https://ornate-veld-185723-default-rtdb.firebaseio.com/";

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    this.http
      .post<{ name: string }>(this.API_URL + "posts.json", postData)
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.http
      .get<{ [key: string]: Post }>(this.API_URL + "posts.json")
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      )
      .subscribe((posts) => (this.loadedPosts = posts));
  }
}
