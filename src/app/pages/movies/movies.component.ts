import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
    movies: Movie[] = [];

    constructor(private moviesService: MoviesService) {}

    ngOnInit(): void {
        this.getPaginatedMoives(1);
    }

    getPaginatedMoives(page: number) {
        this.moviesService.searchMovies(page).subscribe((movies) => {
            this.movies = movies;
        });
    }

    paginate(event: any) {
        this.getPaginatedMoives(event.page + 1);
    }
}
