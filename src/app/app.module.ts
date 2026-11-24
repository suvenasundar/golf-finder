import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { CourseListComponent } from './pages/course-list/course-list.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { RegionChipComponent } from './components/region-chip/region-chip.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CourseListComponent,
    CourseCardComponent,
    RegionChipComponent,
    CourseDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
