import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'offboarding-table',
  },
  {
    path: 'offboarding-table',
    loadComponent: () =>
      import('./offboarding-table/offboarding-table.component').then(
        (c) => c.OffboardingTableComponent
      ),
  },
];
