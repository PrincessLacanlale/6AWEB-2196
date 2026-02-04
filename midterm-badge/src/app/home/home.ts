import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for pipes and *ngFor
import { DataService, Post } from '../data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  // Use the $ suffix convention for Observables
  posts$!: Observable<Post[]>;

  constructor(private ds: DataService) {}

  ngOnInit() {
    // Fetch posts through the shared service
    this.posts$ = this.ds.getPosts();
  }
}
