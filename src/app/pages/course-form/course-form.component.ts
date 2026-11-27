import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Region } from 'src/app/models/golf-course';
@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {
  form = new FormGroup({
    name:new FormControl('', {nonNullable:true, validators: [Validators.required, Validators.minLength(3)]}),
    city:new FormControl('', {nonNullable:true, validators:[Validators.required]}),
    region:new FormControl <Region>('North', {nonNullable:true}),
    holes:new FormControl(18, {nonNullable:true, validators: [Validators.required, Validators.min(1)]} ),
    par:new FormControl(72, {nonNullable: true, validators: [Validators.required, Validators.min(2)]})
  })

}
