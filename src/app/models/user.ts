import { Repo } from "./repo";

export class User{
  UserName?:string="";
  Name?:string="";
  Photo?:string="";
  ProjeSayisi?:number=0;
  Blog?:string="";
  Bio?:string="";
  Company?:string="";
  Email?:string="";
  LinkedInUrl?:string=""
  YoutubeUrl?:string=""
  InstagramUrl?:string=""
  TwitterUrl?:string=""
  Followers?:number=0;
  Following?:number=0;
  Location?:string="";
  Url?:string="";
  // Repos?:Array<Repo>;
}
