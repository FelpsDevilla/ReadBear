// src/app/services/file.service.ts
import { Injectable } from '@angular/core';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { FilePicker } from '@capawesome/capacitor-file-picker';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor() {}

  // Abre seletor de arquivos e retorna base64 do PDF
  static async pickPdfFile(): Promise<string | null | undefined> {
    try {
      const result = await FilePicker.pickFiles({
            types: ['application/pdf']
        });

      if (!result || result.files.length === 0) {
        // await Dialog.alert({ title: 'Nenhum arquivo selecionado', message: 'Por favor, selecione um PDF.' });
        return null;
      }

      const file = result.files[0];

      // Retorna o arquivo em base64
      return file.data; // FilePicker já retorna base64 no mobile
    } catch (error) {
      console.error('Erro ao selecionar arquivo:', error);
      return null;
    }
  }

//   // Caso queira ler um PDF de um path do app
//   async readPdfFile(fileName: string): Promise<string> {
//     const file = await Filesystem.readFile({
//       path: fileName,
//       directory: Directory.Documents
//     });
//     return `data:application/pdf;base64,${file.data}`;
//   }
}
