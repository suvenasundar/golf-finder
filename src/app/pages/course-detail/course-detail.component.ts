
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, switchMap, of, Observable, tap } from 'rxjs';
import { GolfCourse } from 'src/app/models/golf-course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
})
export class CourseDetailComponent {
  course$: Observable<GolfCourse | undefined>;  
  loading = true;
  notFound = false;

  constructor(private route: ActivatedRoute, private courseService: CourseService) {
    this.course$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id'));
        this.loading = true;
        this.notFound = false;

        return this.courseService.getCourseById(id).pipe(
          catchError(() => {
            this.notFound = true;
            return of(undefined);
          }),
          tap(() => this.loading = false)
        );
      })
    );
  }
}