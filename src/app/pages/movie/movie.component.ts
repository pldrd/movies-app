import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, MovieImages, MovieVideo } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { IMAGES_SIZES } from '../../constants/images-sizes';

@Component({
    selector: 'movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
    movie: Movie | null = null;
    imagesSizes = IMAGES_SIZES;
    movieVideos: MovieVideo[] = [];
    movieImages: MovieImages | null = null;

    constructor(
        private route: ActivatedRoute,
        private moviesService: MoviesService
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe(({ id }) => {
            this.getMovie(id);
            this.getMovieVideos(id);
            this.getMovieImages(id);
        });
    }

    getMovie(id: string) {
        this.moviesService.getMovie(id).subscribe((movieData) => {
            this.movie = movieData;
        });
    }

    getMovieVideos(id: string) {
        this.moviesService.getMovieVideos(id).subscribe((movieVideoData) => {
            this.movieVideos = movieVideoData.slice(0, 3);
        });
    }

    getMovieImages(id: string) {
        this.moviesService.getMovieImages(id).subscribe((movieImagesData) => {
            this.movieImages = movieImagesData;
            console.log(movieImagesData);
        });
    }
}
