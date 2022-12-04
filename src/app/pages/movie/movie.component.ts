import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import {
    Movie,
    MovieCredits,
    MovieImages,
    MovieVideo,
} from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { IMAGES_SIZES } from '../../constants/images-sizes';

@Component({
    selector: 'movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit, OnDestroy {
    movie: Movie | null = null;
    imagesSizes = IMAGES_SIZES;
    movieVideos: MovieVideo[] = [];
    movieImages: MovieImages | null = null;
    movieCredits: MovieCredits | null = null;
    responsiveOptions: any[] = [
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2,
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1,
        },
    ];

    constructor(
        private route: ActivatedRoute,
        private moviesService: MoviesService
    ) {
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 5,
                numScroll: 3,
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2,
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1,
            },
        ];
    }

    ngOnInit(): void {
        this.route.params.pipe(first()).subscribe(({ id }) => {
            this.getMovie(id);
            this.getMovieVideos(id);
            this.getMovieImages(id);
            this.getMovieCredits(id);
        });
    }

    ngOnDestroy(): void {}

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
        });
    }

    getMovieCredits(id: string) {
        this.moviesService.getMovieCredits(id).subscribe((movieCreditsData) => {
            this.movieCredits = movieCreditsData;
        });
    }
}
