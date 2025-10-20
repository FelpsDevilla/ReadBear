import { Injectable } from '@angular/core';
import { Filesystem, Directory } from '@capacitor/filesystem';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor() {}

  public async getFilesDir(){
      const list = await Filesystem.readdir({
        path: '',
        directory: Directory.Documents,
      });

      return list.files;
  }

  public async getFilePath(fileTitle: string){
    const uriResult = await Filesystem.getUri({
      directory: Directory.Documents,
      path: fileTitle,
    });

    return uriResult;
  }

  public async getFolderPath(): Promise<string> {
    console.log('Adicionar Biblioteca - FileService');
    return '/mock/path/to/folder';
  }
}