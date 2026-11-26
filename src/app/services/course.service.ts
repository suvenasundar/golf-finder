import { Injectable } from '@angular/core';
import { GolfCourse } from '../models/golf-course';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/courses';
  constructor(private http: HttpClient) {}

  getCourses(): Observable <GolfCourse[]>{
    return this.http.get<GolfCourse[]>(this.apiUrl)
  }
  getCourseById(id: number): Observable <GolfCourse>{
   return this.http.get<GolfCourse>(`${this.apiUrl}/${id}`)
  }
  
}
