import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpErrorResponse } from '@angular/common/http';
import { Observable , throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseSystemService {
 

  endpoint="http://localhost:2222";

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }
 
  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<any> {
    return this.httpClient.get<any>(this.endpoint + '/api/save');

  }
  //  login(details : any)
  //  {
  //   return this.data.post(`${this.endpoint}/api/userlogin` , details , this.httpOptions )
  //   .pipe(
  //     catchError((error: HttpErrorResponse) => {
  //       console.error('Login error:', error);
  //       return throwError('Invalid username or password.');
  //     })
  //   );
  //  }
  login(username: string, password: string): Observable<any> {
    const payload = {
      username: username,
      password: password
    };

    return this.httpClient.post(`${this.endpoint}/api/userlogin`, payload, this.httpOptions)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Login error:', error);
          return throwError('Invalid username or password.');
        })
      );
  }

  // center details
  getAllCenters(): Observable<any> {
    return this.httpClient.get<any>(this.endpoint + '/api/find');
  }

  // course details
  getallCourse():Observable<any>{
    return this.httpClient.get<any>(this.endpoint + '/api/findcourse')
  }

  // getcourse
  getallfees():Observable<any>{
    return this.httpClient.get<any>(this.endpoint + '/api/findfees')
  }

  // getenrollment
  getenrollment():Observable<any>{
    return this.httpClient.get<any>(this.endpoint + '/api/findenroll')
  }
}
