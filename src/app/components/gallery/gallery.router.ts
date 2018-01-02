import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery.component';

const GALLERY_ROUTER: Routes = [
    {
        path: '',
        component: GalleryComponent
    }
];

export const galleryRouter = RouterModule.forChild(GALLERY_ROUTER);
