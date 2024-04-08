import { Component } from '@angular/core';
import { CourseSystemService } from '../course-system.service';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrl: './fees.component.css'
})
export class FeesComponent {

  fees: any[] = [];

  constructor(private feesService: CourseSystemService) { }

  ngOnInit(): void {
    this.getFees();
  }

  getFees(): void {
    this.feesService.getallfees()
      .subscribe(fees => this.fees = fees);
  }
}
