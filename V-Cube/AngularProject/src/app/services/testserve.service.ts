import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable, throwError } from 'rxjs';
//import { catchError, retry } from 'rxjs/operators';
import { Users } from '../models/users.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestserveService {
 
  constructor(public httpObject :HttpClient) { }

 // getuser(){
get user(){
   // alert("Service working properly")
   return true;
  }
  get details():Observable<Users[]>{
    alert("Srvice Is Working");
    return this.httpObject.get<Users[]>('https://jsonplaceholder.typicode.com/users/oooo');
  }
  postmethod(user : Users):Observable<Users>{
    alert("post Working")
    return this.httpObject.post<Users>('https://jsonplaceholder.typicode.com/posts',user);
  }
  patchUsersService(userpatch : Users){
    alert("patch Working")
    return this.httpObject.patch<Users>('https://jsonplaceholder.typicode.com/users/userpatch.id',userpatch);
  }
  deleteDataMethod(){
    alert("Delete Working")
    return this.httpObject.delete<Users>('https://jsonplaceholder.typicode.com/users/3')
  }
}
