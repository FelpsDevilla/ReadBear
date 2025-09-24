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
  //   {
  //   path: 'book/:id', // rota com ID
  //   loadChildren: () => import('./pages/book-detail/book-detail.module').then(m => m.BookDetailPageModule)
  // }

];
