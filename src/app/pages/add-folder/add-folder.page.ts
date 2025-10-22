import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonItem, IonList, IonLabel, IonButton } from '@ionic/angular/standalone';
import { Library } from 'src/app/classes/library';
import { NothingToSeeYetComponent } from 'src/app/components/nothing-to-see-yet/nothing-to-see-yet.component';
import { FileService } from 'src/app/services/file.service';
import { LibraryService } from 'src/app/services/library.service';
import { library } from 'ionicons/icons';

@Component({
  selector: 'app-add-folder',
  templateUrl: './add-folder.page.html',
  styleUrls: ['./add-folder.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, 
    IonHeader, IonButtons, IonItem, IonLabel, IonList, IonButton, NothingToSeeYetComponent]
})
export class AddFolderPage implements OnInit {
  librarys: Library[] = []

  constructor(private fileService: FileService, private libraryService: LibraryService) { }

  ngOnInit() {
    this.loadLibrarys();
  }

  private async loadLibrarys() {
    const bookList = await this.fileService.listBooks();
    console.log('Lista de livros salvos: ' + JSON.stringify(bookList));

    ///this.librarys = await this.libraryService.getLibrarys();
  }

  public async addLibrary() {
    const book = await this.fileService.saveBook();
    const bookList = await this.fileService.listBooks();
    console.log('Lista de livros salvos: ' + JSON.stringify(bookList));
    const path = "teste/path/to/folder"; //await this.fileService.getFolderPath();
    const library = new Library();
    library.path = path;
    library.title = 'New Library';
    // Adcionar popover com input e title

    //this.libraryService.addLibrary(library);
  }
}