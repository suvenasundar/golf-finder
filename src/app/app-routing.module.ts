import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './pages/course-list/course-list.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full'},
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/:id', component: CourseDetailComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
