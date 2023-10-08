import { Component } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { Repo } from 'src/app/models/repo';
import { User } from 'src/app/models/user';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'example';
  user:User=new User();
  repos?:Repo[]=[];
  isActive:boolean=false;
  constructor(private githubApi:GithubService) {
    this.githubApi.get().subscribe(data=>console.log(data)
    )
  }


  sorgula(username:string){
    // this.user=null;
    this.repos=[];
    this.isActive=true;
    this.githubApi.getUser(username).pipe(
      catchError(()=>of(alert("Boyle bir kullanici blunamadi.")))
    )
    .subscribe(
      data=>{
        if(data == null)
          alert("Ilgili bilgiler getirilemedi.")
        else{
          console.log(data);

          this.user.UserName=data["login"]
          this.user.Bio=data["bio"]
          this.user.Blog=data["blog"]
          this.user.Company=data["company"]
          this.user.Email=data["email"]
          this.user.Followers=data["followers"]
          this.user.Following=data["folowing"]
          this.user.InstagramUrl=data[""]
          this.user.Location=data["location"]
          this.user.Name=data["name"]
          this.user.TwitterUrl=data["twitter_username"]
          this.user.Url=data["html_url"]
          this.user.Photo=data["avatar_url"]
          this.user.LinkedInUrl=data[""]
          this.user.TwitterUrl=data["twitter_username"]
        }
    }
    )
    this.githubApi.getRepos(username)
    .pipe(
      catchError(()=>of())
    )
    .subscribe(
          data2=>{
            console.log(data2);
            let sayac=0;
            for(var r of data2){
              this.repos[sayac]={
                RepoName:r["name"],
                Description:r["description"],
                Url:r["html_url"]
              }
              sayac++;
            }
        }
    )
  }
}
