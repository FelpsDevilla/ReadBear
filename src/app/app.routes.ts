import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
    {
    path: 'pdf',
    loadComponent: () => import('./pdf-viwer/pdf-viwer.page').then((m) => m.PdfViewerPage),
  },
];
