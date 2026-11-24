import { Component, Input } from '@angular/core';
import { GolfCourse } from 'src/app/models/golf-course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
 @Input() course !: GolfCourse ;
}
