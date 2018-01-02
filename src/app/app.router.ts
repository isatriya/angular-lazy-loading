import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

export const router: Routes = [
    {
        path: '',
        loadChildren: './components/home/home.module#HomeModule',
        pathMatch: 'full'
    },
    {
        path: 'gallery',
        loadChildren: './components/gallery/gallery.module#GalleryModule'
    },
    {
        path: 'about',
        loadChildren: './components/about/about.module#AboutModule'
    }
];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(router);
