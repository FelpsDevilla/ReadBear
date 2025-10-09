import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonContent, IonSearchbar } from '@ionic/angular/standalone';
import { BookMiniatureComponent } from '../components/book-miniature/book-miniature.component';
import { Book } from '../classes/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: 'tab-home.page.html',
  styleUrls: ['tab-home.page.scss'],
  imports: [IonHeader, IonToolbar, IonContent, IonSearchbar, BookMiniatureComponent],
})
export class TabHomePage {
  public myBooks: Book[] = [];
  constructor(private bookService: BookService) { }

  async ngOnInit() {
    this.loadBooks();
  }

  async loadBooks() {
    this.myBooks = await this.bookService.getBooks();
  }
}