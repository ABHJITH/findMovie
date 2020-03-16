import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { User } from '../user';
import { Observable } from '../../../node_modules/rxjs';
import {  Subscriber } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ApodResponse } from '../apod-response';
import { ImdbApiService } from '../imdb-api.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  movieName:string;
  result:object; 
  Search:object;
 
  searchMovies(movieName:string){
    this.imdbService.searchMoviebyTitle(movieName)
      .subscribe((result: any)=>{
      this.result=result;
      this.Search=result.Search;
      console.log(this.Search);
      
    })
  
  }
  public config: ApodResponse[];
  constructor(private imdbService: ImdbApiService ) { }
  
 
  public movies=[];
 

 
  ngOnInit(): void {
   
  }
 
  onSubmit(){
   
   
    
    
        
      
    
  }
}