import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {
  form = new FormGroup({
    name:new FormControl(''),
    city:new FormControl(''),
    region:new FormControl('North')
  })

}
