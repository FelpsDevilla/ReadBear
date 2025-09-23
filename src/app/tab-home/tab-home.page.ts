import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonContent, IonSearchbar } from '@ionic/angular/standalone';
import { BookMiniatureComponent } from '../components/book-miniature/book-miniature.component';
import { Book } from '../classes/book';

@Component({
  selector: 'app-home',
  templateUrl: 'tab-home.page.html',
  styleUrls: ['tab-home.page.scss'],
  imports: [IonHeader, IonToolbar, IonContent, IonSearchbar, BookMiniatureComponent],
})
export class TabHomePage {
  constructor() {}

public myBooks: Book[] = [

];
}
