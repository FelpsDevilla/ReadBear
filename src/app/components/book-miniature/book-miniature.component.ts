import { Component, Input } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { Book } from 'src/app/classes/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-miniature',
  templateUrl: './book-miniature.component.html',
  styleUrls: ['./book-miniature.component.scss'],
  imports: [IonIcon]
})
export class BookMiniatureComponent {
  @Input() book!: Book;

  constructor(private router: Router) { }

  ngOnInit() { }

  onBookClick() {
    this.router.navigate(['/pdf'], {queryParams: { book: JSON.stringify(this.book) }});
  }
}