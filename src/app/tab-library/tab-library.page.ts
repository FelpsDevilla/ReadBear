import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonContent, IonSearchbar, IonButton } from '@ionic/angular/standalone'
import { BookMiniatureComponent } from '../components/book-miniature/book-miniature.component';
import { Book } from '../classes/book';
import { NothingToSeeYetComponent } from '../components/nothing-to-see-yet/nothing-to-see-yet.component';
import { FileService } from '../services/file.service';

@Component({
  selector: 'app-library',
  templateUrl: 'tab-library.page.html',
  styleUrls: ['tab-library.page.scss'],
  imports: [IonHeader, IonToolbar, IonContent, IonSearchbar, IonButton, BookMiniatureComponent, NothingToSeeYetComponent]
})

export class TabLibraryPage {
  public myBooks: Book[] = [];
  constructor(private fileService: FileService) { }

  async ngOnInit() {
    await this.loadBooks();
  }

  async loadBooks() {
    this.myBooks = await this.fileService.listBooks();
  }

  public async addBook() {
    await this.fileService.saveBook();
    await this.loadBooks();
  }
}