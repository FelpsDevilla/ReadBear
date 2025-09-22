import { Component, Input, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';
import { Book } from 'src/app/classes/book';

@Component({
  selector: 'app-book-miniature',
  templateUrl: './book-miniature.component.html',
  styleUrls: ['./book-miniature.component.scss'],
  imports: [IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent]
})
export class BookMiniatureComponent  implements OnInit {
  @Input() book!: Book;

  constructor() 
  { 
  }

  ngOnInit() {}

  onBookClick() {
    console.log('Livro clicado:', this.book);
    // aqui você pode navegar, abrir modal, emitir evento, etc.
  }

}