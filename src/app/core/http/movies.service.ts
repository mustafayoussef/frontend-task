import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(public http: HttpClient) {}
  getTredindMovies(): Observable<any> {
    return this.http.get(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=5d900a04f25518f6ff167c2637b95f96',
      { params: { page: '1' } }
    );
  }
}
