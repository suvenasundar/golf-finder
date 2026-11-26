import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GolfCourse } from 'src/app/models/golf-course';
import { CourseService } from 'src/app/services/course.service';
@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent {
  course: GolfCourse | undefined;
  loading = true;
  notFound = false;
  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService

  ){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.courseService.getCourseById(id).subscribe({
      next: course =>{
        this.course = course;
        this.loading = false
      },
      error: () => {
        this.notFound = true;
        this.loading = false;
      }
    });
    
  }
}
