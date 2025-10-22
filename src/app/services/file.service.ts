import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { FilePicker } from '@capawesome/capacitor-file-picker';


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

    const webPath = Capacitor.convertFileSrc(file.path);
    const response = await fetch(webPath);

    const base64Data = await this.blobToBase64(await response.blob());

    await Filesystem.writeFile({
      path: file.name,         // nome do arquivo no app
      data: base64Data,
      directory: Directory.Documents
    });
  }

  public async listBooks(): Promise<any> {
    const result = await Filesystem.readdir({directory: Directory.Documents, path: ''});
    return result.files;
  }

  private async blobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        // remove a parte do data URL "data:application/pdf;base64,"
        const base64 = (reader.result as string).split(',')[1];
        resolve(base64);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }
}