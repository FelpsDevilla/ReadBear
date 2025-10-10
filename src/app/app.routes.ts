import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'pdf',
    loadComponent: () => import('./pages/pdf-viwer/pdf-viwer.page').then((m) => m.PdfViewerPage),
  },
  {
    path: 'add-folder',
    loadComponent: () => import('./pages/add-folder/add-folder.page').then( m => m.AddFolderPage)
  }
];
