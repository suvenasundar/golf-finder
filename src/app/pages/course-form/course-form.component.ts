import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GolfCourse, Region } from 'src/app/models/golf-course';
import { CourseService } from 'src/app/services/course.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {
  constructor (private courseService: CourseService, private router: Router){}
  form = new FormGroup({
    name:new FormControl('', {nonNullable:true, validators: [Validators.required, Validators.minLength(3)]}),
    city:new FormControl('', {nonNullable:true, validators:[Validators.required]}),
    region:new FormControl <Region>('North', {nonNullable:true}),
    holes:new FormControl(18, {nonNullable:true, validators: [Validators.required, Validators.min(1)]} ),
    par:new FormControl(72, {nonNullable:true, validators: [Validators.required, Validators.min(2)]}),
    address:new FormControl('', {nonNullable:true, validators:[Validators.required]}),
    lat:new FormControl <number|null> (null, [Validators.required, Validators.min(-90), Validators.max(90)]),
    lng:new FormControl <number|null> (null, [Validators.required, Validators.min(-180), Validators.max(180)]),

  })

  save(): void {
    const raw = this.form.getRawValue();
    const newCourse: Omit <GolfCourse, 'id'> = {
      ...raw,
      lat:raw.lat ?? 0,
      lng:raw.lng ?? 0,
      rating: 0,
    };
    this.courseService.addCourse(newCourse).subscribe(created => {
      this.router.navigate(['/courses',created.id])
    })
  }

}
