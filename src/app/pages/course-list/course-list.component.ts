import { Component } from '@angular/core';
import { GolfCourse } from 'src/app/models/golf-course';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent {
  courses: GolfCourse[] = [
    {
      id: 1,
      name: 'Lakeview Golf Club',
      city: 'Northfield',
      region: 'North',
      holes: 18,
      par: 72,
      rating: 4.6,
    },
    {
      id: 2,
      name: 'Green Hills Course',
      city: 'Hillside',
      region: 'North',
      holes: 9,
      par: 36,
      rating: 4.1,
    },
    {
      id: 3,
      name: 'Sunrise Links',
      city: 'Eastport',
      region: 'East',
      holes: 18,
      par: 71,
      rating: 4.4,
    },
    {
      id: 4,
      name: 'Old Oak Golf Club',
      city: 'Westbrook',
      region: 'West',
      holes: 18,
      par: 70,
      rating: 4.2,
    },
    {
      id: 5,
      name: 'Coastal Dunes Course',
      city: 'Southbay',
      region: 'South',
      holes: 18,
      par: 72,
      rating: 4.8,
    },
    {
      id: 6,
      name: 'Maple Ridge Golf Club',
      city: 'Westbrook',
      region: 'West',
      holes: 9,
      par: 35,
      rating: 3.9,
    },
  ];
}
