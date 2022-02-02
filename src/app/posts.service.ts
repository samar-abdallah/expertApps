import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import{Observable, observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class PostsService {
 
  constructor(public _http:HttpClient) { }
  getPosts():Observable<any>{
    return this._http.get('https://jsonplaceholder.typicode.com/users')
  }
}
