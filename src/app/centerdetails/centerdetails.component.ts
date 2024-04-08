 import { Component, OnInit } from '@angular/core';
import { CourseSystemService } from '../course-system.service';

@Component({
  selector: 'app-centerdetails',
  templateUrl: './centerdetails.component.html',
  styleUrls: ['./centerdetails.component.css']
})
export class CenterdetailsComponent implements OnInit {
  centers: any[] = [];

  constructor(private courseService: CourseSystemService) { }

  ngOnInit() {
    this.getCenters();
  }

  getCenters() {
    this.courseService.getAllCenters().subscribe(
      (response: any) => {
        console.log('API Response:', response);
        // Convert object to array and assign to centers
        this.centers = Object.keys(response).map(key => response[key]);
      },
      error => {
        console.log('Error fetching centers:', error);
      }
    );
  }

}
