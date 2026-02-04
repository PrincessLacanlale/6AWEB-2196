import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService, Post } from '../data'; // Ensure Post interface is exported in data.ts
import { FilterPipe } from '../filter-pipe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterPipe],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services implements OnInit {
  services$!: Observable<Post[]>;
  searchText: string = '';

  constructor(private ds: DataService) {}

  ngOnInit() {
    this.services$ = this.ds.getPosts(); // Uses the shared service with caching
  }
}
