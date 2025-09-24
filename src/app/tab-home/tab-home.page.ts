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
  new Book("Filosofia 2022",
    "https://marketplace.canva.com/EAFLe92Oed0/1/0/1003w/canva-capa-para-caderno-filosofia-marrom-moderno-NQYHa-5cWtQ.jpg",
    "https://example.com/cover1.pdf"),

  new Book("História Antiga",
    "https://marketplace.canva.com/EAFLe92Oed0/1/0/1003w/canva-capa-para-caderno-filosofia-marrom-moderno-NQYHa-5cWtQ.jpg",
    "https://example.com/cover2.pdf"),

  new Book("Matemática Moderna",
    "https://marketplace.canva.com/EAFLe92Oed0/1/0/1003w/canva-capa-para-caderno-filosofia-marrom-moderno-NQYHa-5cWtQ.jpg",
    "https://example.com/cover3.pdf"),

  new Book("Literatura Brasileira",
    "https://marketplace.canva.com/EAFLe92Oed0/1/0/1003w/canva-capa-para-caderno-filosofia-marrom-moderno-NQYHa-5cWtQ.jpg",
    "https://example.com/cover4.pdf"),

  new Book("Química do Cotidiano",
    "https://marketplace.canva.com/EAFLe92Oed0/1/0/1003w/canva-capa-para-caderno-filosofia-marrom-moderno-NQYHa-5cWtQ.jpg",
    "https://example.com/cover5.pdf"),

  new Book("Física Aplicada",
    "https://marketplace.canva.com/EAFLe92Oed0/1/0/1003w/canva-capa-para-caderno-filosofia-marrom-moderno-NQYHa-5cWtQ.jpg",
    "https://example.com/cover6.pdf"),

  new Book("Sociologia Contemporânea",
    "https://marketplace.canva.com/EAFLe92Oed0/1/0/1003w/canva-capa-para-caderno-filosofia-marrom-moderno-NQYHa-5cWtQ.jpg",
    "https://example.com/cover7.pdf"),

  new Book("Arte Renascentista",
    "https://marketplace.canva.com/EAFLe92Oed0/1/0/1003w/canva-capa-para-caderno-filosofia-marrom-moderno-NQYHa-5cWtQ.jpg",
    "https://example.com/cover8.pdf"),

  new Book("Biologia Evolutiva",
    "https://marketplace.canva.com/EAFLe92Oed0/1/0/1003w/canva-capa-para-caderno-filosofia-marrom-moderno-NQYHa-5cWtQ.jpg",
    "https://example.com/cover9.pdf"),

  new Book("Tecnologia e Sociedade",
    "https://marketplace.canva.com/EAFLe92Oed0/1/0/1003w/canva-capa-para-caderno-filosofia-marrom-moderno-NQYHa-5cWtQ.jpg",
    "https://example.com/cover10.pdf"),
];

}
