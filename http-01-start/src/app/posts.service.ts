import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Post } from "./post.model";

@Injectable({
  providedIn: "root",
})
export class PostsService {
  private API_URL = "https://ornate-veld-185723-default-rtdb.firebaseio.com/";
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title, content };
    this.http
      .post<{ name: string }>(this.API_URL + "posts.json", postData)
      .subscribe(
        (responseData) => {
          console.log(responseData);
        },
        (error) => {
          this.error.next(error.message);
        }
      );
  }

  fetchPosts() {
    return this.http
      .get<{ [key: string]: Post }>(this.API_URL + "posts.json", {
        headers: new HttpHeaders({ "Custom-Header": "Hello" }),
      })
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }),
        catchError((errorRes) => {
          return throwError(errorRes);
        })
      );
  }

  deletePost(key: string) {
    return this.http.delete(this.API_URL + `posts/${key}.json`);
  }

  deleteAllPosts() {
    return this.http.delete(this.API_URL + "posts.json");
  }
}
