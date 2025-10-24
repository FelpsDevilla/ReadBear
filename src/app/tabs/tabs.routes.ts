import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tabLibrary',
        loadComponent: () =>
          import('../tab-library/tab-library.page').then((m) => m.TabLibraryPage),
      },
      {
        path: '',
        redirectTo: '/tabs/tabLibrary',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tabLibrary',
    pathMatch: 'full',
  },
];
