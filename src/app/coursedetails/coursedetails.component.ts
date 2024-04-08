import { Component } from '@angular/core';
import { CourseSystemService } from '../course-system.service';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrl: './coursedetails.component.css'
})
export class CoursedetailsComponent {

  courses: any[]=[];

  constructor(private courseService: CourseSystemService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  // getCourses(): void {
  //   this.courseService. getallCourse()
  //     .subscribe(courses => this.courses = courses);
  // }

  getCourses() {
    this.courseService.getallCourse().subscribe(
      (response: any) => {
        console.log('API Response:', response);
        // Convert object to array and assign to centers
        this. courses = Object.keys(response).map(key => response[key]);
      },
      error => {
        console.log('Error fetching centers:', error);
      }
    );
  }
}

