import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Course } from 'src/app/Course';

@Component({
  selector: 'app-display-course',
  templateUrl: './display-course.component.html',
  styleUrls: ['./display-course.component.css']
})
export class DisplayCourseComponent implements OnInit {
  @Input() course: Course = new Course;
  @Output() todoDelete: EventEmitter<Course> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
}
