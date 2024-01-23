import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'autocomplete',
        title: 'AutoComplete settings',
        loadComponent: async () => (await import('./autocomplete/autocomplete.component')).AutoCompleteComponent,
    },
];
