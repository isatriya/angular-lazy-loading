import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { aboutRouter } from './about.router';

@NgModule({
    declarations: [ AboutComponent ],
    imports: [ aboutRouter ]
})

export class AboutModule { }
