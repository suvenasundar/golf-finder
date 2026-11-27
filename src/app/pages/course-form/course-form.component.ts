import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {
  form = new FormGroup({
    name:new FormControl('', [Validators.required, Validators.minLength(3)]),
    city:new FormControl('', [Validators.required]),
    region:new FormControl('North')
  })

}
