import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AppError } from '../common/app-error';
import { catchError, retry, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  
  constructor(private httpClient: HttpClient, 
    private appError: AppError
    ) { }

  getPost() {
    return this.httpClient.get(this.url)
    .pipe(
      // map( response => {
      //   console.log ('using MAp' + JSON.stringify(response));
      // }),
      retry(3),
      catchError(this.appError.handleError)
    )
  }
  addPost(newData) {
    return this.httpClient.post(this.url, newData)
    .pipe(
      // map(response => {
      //   // console.log ('using MAp' + response);
      // }),
      catchError(this.appError.handleError));
  }
  removePost(pdata) {
    return this.httpClient.delete(this.url + '/' + pdata.id)
    .pipe(
      // map( response => {
        // console.log ('using MAp' + response);
      // }),
      catchError(this.appError.handleError));
  }

  // update whole value with Put method 
  editPost(pdata, postData) {
    return this.httpClient.put(this.url + '/' + pdata.id, postData)
    .pipe(catchError(this.appError.handleError));
  }
  
  // update perticular value with Patch method 
  // editPost(pdata, patchData) {
  //   return this.httpClient.patch(this.url + '/' + pdata.id, patchData)
  // }
}

