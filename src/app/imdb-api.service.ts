import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { ApodResponse } from './apod-response';
@Injectable({
  providedIn: 'root'
})
export class ImdbApiService {
  searchMoviebyTitle(movieName: string): Observable<ApodResponse[]>{
    const url = 'https://www.omdbapi.com/?s=' + movieName +'&apikey=7c30503';
    return this.http.get<ApodResponse[]>(url);
  }
  constructor(private http: HttpClient) {}
  }
