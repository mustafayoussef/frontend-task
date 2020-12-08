import { MoviesService } from './../../core/http/movies.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../../core/models/movie';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  totalMovies = [];
  element: any;
  movies: Movie[];
  imagePrefix: string;
  constructor(public moviesService: MoviesService) {
    this.imagePrefix = 'https://image.tmdb.org/t/p/w500';
    this.totalMovies = [];
    this.movies = [];
    this.moviesService.getTredindMovies().subscribe((data) => {
      for (const movie of data.results) {
        this.movies.push(
          new Movie(
            movie.id,
            movie.title,
            movie.poster_path,
            movie.vote_average
          )
        );
      }
      console.log(this.movies);
    });
  }

  ngOnInit(): void {}
}
