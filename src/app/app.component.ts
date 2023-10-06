import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GithubService } from './services/github.service';
import { User } from './models/user';
import { Repo } from './models/repo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example';
  user:User=new User();
  repos?:Repo[]=[];
  constructor(private githubApi:GithubService) {
  }


  sorgula(username:string){
    this.githubApi.getUser(username).subscribe(data=>{
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
        this.user.Url=data["url"]
        this.user.Photo=data["avatar_url"]
        this.user.LinkedInUrl=data[""]
    })

    this.githubApi.getRepos(username).subscribe(data2=>{
      let sayac=0;
      for(var r of data2){
        this.repos[sayac]={
          RepoName:r["name"],
          Description:r["description"],
          Url:r["html_url"]
        }
        sayac++;
      }
    })
  }


}
