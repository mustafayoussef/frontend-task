import { MoviesService } from './../../core/http/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css'],
})
export class MoviedetailsComponent implements OnInit {
  id: any;
  allMovieDetails: any;
  imagePrefix: string;
  isLoading: boolean;
  topTen: any = [];
  cuttentCharacter: any;
  oldID: number;
  constructor(
    public moviesService: MoviesService,
    public activatedRoute: ActivatedRoute
  ) {
    this.isLoading = false;
    this.imagePrefix = 'https://image.tmdb.org/t/p/w500/';
    this.id = activatedRoute.snapshot.paramMap.get('id');
    this.oldID = this.id;

    // Top 10
    moviesService.getTredindMovies().subscribe((movies) => {
      for (let i = 0; i < 10; i++) {
        this.topTen.push(movies.results[i]);
      }
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = +params.id;
      this.moviesService.getMovieDetails(this.id).subscribe((data) => {
        this.allMovieDetails = data;
        // console.log(this.allMovieDetails);
      });
      // cast
      if (this.oldID !== this.id) {
        this.cuttentCharacter = [];
        this.moviesService.getMovieCast(this.id).subscribe((castData) => {
          for (let i = 0; i < 10; i++) {
            this.cuttentCharacter.push(castData.credits.cast[i]);
          }
        });
      }
    });
  }
}
