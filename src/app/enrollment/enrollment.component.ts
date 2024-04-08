import { Component } from '@angular/core';
import { CourseSystemService } from '../course-system.service';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrl: './enrollment.component.css'
})
export class EnrollmentComponent {

  enrollment: any[] = [];

  constructor(private enrollservice: CourseSystemService) { }

  ngOnInit(): void {
    this.  getenrollment();
  }

  getenrollment(): void {
    this.enrollservice. getenrollment()
      .subscribe(enrol => this.  enrollment = enrol);
  }
}
