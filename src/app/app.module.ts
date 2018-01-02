import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { appRouter } from './app.router';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
  ],
  imports: [
    BrowserModule,
    appRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
