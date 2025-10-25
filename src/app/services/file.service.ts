import { Injectable } from '@angular/core';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { FilePicker } from '@capawesome/capacitor-file-picker';
import { Book } from '../classes/book';


@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor() { }

  public async pickBook(): Promise<any> {

    const result = await FilePicker.pickFiles({
      types: ['application/pdf'],
      limit: 1,
    });

    if (!result || result.files.length === 0) {
      console.log('Nenhum arquivo selecionado');
      return;
    }

    console.log('Arquivo selecionado no FilePicker: ' + JSON.stringify(result.files[0]));
    return result.files[0];
  }

  public async saveBook() {
    const file = await this.pickBook();

    const readResult = await Filesystem.readFile({
      path: file.path,
    });

    await Filesystem.writeFile({
      path: `/documents/${file.name}`,
      data: readResult.data,
      directory: Directory.Data,
      recursive: true,
    });

    return new Book(file.name, file.path, 0);
  }

  public async listBooks(): Promise<Book[]> {
    const result = await Filesystem.readdir({ directory: Directory.Data, path: '/documents' });
    const books: Book[] = new Array<Book>();

    result.files.forEach(file => {
      books.push(new Book(
        file.name,
        file.uri,
        0
      ));
    })

    return books;
  }
}