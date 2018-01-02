import { NgModule } from '@angular/core';
import { GalleryComponent } from './gallery.component';
import { galleryRouter } from './gallery.router';

@NgModule({
    declarations: [ GalleryComponent ],
    imports: [ galleryRouter ]
})

export class GalleryModule { }
