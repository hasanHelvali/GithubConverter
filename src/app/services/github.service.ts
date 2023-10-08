import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable, filter, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  userName:String="";
  constructor(private http:HttpClient) {

   }

  get(){
    var a = this.http.get("https://api.github.com/users");
    return a;
  }
   getUser(username:string):Observable<any>{
      var a = this.http.get("https://api.github.com/users/"+username);
    return a;
   }
   getRepos(userName:string):Observable<any>{
      var a= this.http.get("https://api.github.com/users/"+userName+"/repos");
    return a;
   }
}
