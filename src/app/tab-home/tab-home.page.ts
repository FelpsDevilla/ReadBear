import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar } from '@ionic/angular/standalone';
import { BookMiniatureComponent } from '../components/book-miniature/book-miniature.component';
import { Book } from '../classes/book';

@Component({
  selector: 'app-home',
  templateUrl: 'tab-home.page.html',
  styleUrls: ['tab-home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, BookMiniatureComponent],
})
export class TabHomePage {
  constructor() {}

  public myBook: Book = new Book(
    "Filosifa 2022", 
    "Autor 1", 
    2021, 
    "https://marketplace.canva.com/EAFLe92Oed0/1/0/1003w/canva-capa-para-caderno-filosofia-marrom-moderno-NQYHa-5cWtQ.jpg", 
    "https://example.com/cover1.pdf");
}
