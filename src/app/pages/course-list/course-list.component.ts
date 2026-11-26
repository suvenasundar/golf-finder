import { Component } from '@angular/core';
import { GolfCourse, Region } from 'src/app/models/golf-course';
import { CourseService } from 'src/app/services/course.service';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent {
  searchText = '';
  onSearch (event: Event){
    this.searchText = (event.target as HTMLInputElement).value;
  }
  regions: (Region | 'All')[] = ['All', 'North', 'South', 'East', 'West'];
  selectedRegion: Region | 'All' = 'All';

  courses:GolfCourse [] = []
  
  constructor(private courseService: CourseService){
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
    })

  }
  
  
  get filteredCourses(): GolfCourse[] {
  const term = this.searchText.trim().toLowerCase();
  return this.courses.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(term) || c.city.toLowerCase().includes(term);
    const matchesRegion = this.selectedRegion === 'All' || c.region === this.selectedRegion;
    return matchesSearch && matchesRegion;
  });
}
}
