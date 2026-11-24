import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent {
  id: string | null = null;
  constructor(private route: ActivatedRoute){
    this.id = this.route.snapshot.paramMap.get('id')
  }
}
