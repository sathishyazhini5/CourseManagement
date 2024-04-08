import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CenterdetailsComponent } from './centerdetails/centerdetails.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { FeesComponent } from './fees/fees.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'centerdetails',component:CenterdetailsComponent},
  {path:'coursedetails',component:CoursedetailsComponent},
  {path:'fees',component:FeesComponent},
  {path:'enrollment',component:EnrollmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
