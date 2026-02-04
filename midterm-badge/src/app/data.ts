import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Required for remote JSON
import { Observable, shareReplay } from 'rxjs';

export interface Post {
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  private postsCache$?: Observable<Post[]>;

  constructor(private http: HttpClient) {}

  // This fulfills the "Shared Service & HTTP" requirement
  getPosts(): Observable<Post[]> {
    if (!this.postsCache$) {
      // shareReplay(1) ensures the API is called once and reused
      this.postsCache$ = this.http.get<Post[]>(this.apiUrl).pipe(
        shareReplay(1)
      );
    }
    return this.postsCache$;
  }
}
