import { Component, Input, OnInit } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { Book } from 'src/app/classes/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-miniature',
  templateUrl: './book-miniature.component.html',
  styleUrls: ['./book-miniature.component.scss'],
  imports: [IonIcon]
})
export class BookMiniatureComponent implements OnInit {
  @Input() book!: Book;

  constructor(private router: Router) { }

  ngOnInit() { }

  onBookClick() {
    this.router.navigate(['/pdf']);
    console.log('Livro clicado:', this.book);
    // aqui você pode navegar, abrir modal, emitir evento, etc.
  }

}