import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tabHome',
        loadComponent: () =>
          import('../tab-home/tab-home.page').then((m) => m.TabHomePage),
      },
      {
        path: 'tabLibrary',
        loadComponent: () =>
          import('../tab-library/tab-library.page').then((m) => m.TabLibraryPage),
      },
      {
        path: 'tabConfig',
        loadComponent: () =>
          import('../tab-config/tab-config.page').then((m) => m.TabConfigPage),
      },
      {
        path: '',
        redirectTo: '/tabs/tabHome',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tabHome',
    pathMatch: 'full',
  },
];
