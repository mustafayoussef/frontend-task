import { Observable, EMPTY } from 'rxjs';
import { MoviesService } from './../http/movies.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class MovieResolver implements Resolve<any> {
  constructor(private moviesService: MoviesService) {}
  resolve(next: ActivatedRouteSnapshot): Observable<any> {
    const pageId = next.paramMap.get('id');
    return pageId ? this.moviesService.getMovieCast(pageId) : EMPTY;
  }
}
