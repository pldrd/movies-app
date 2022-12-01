export interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    tagline: string;
    genres: [
        {
            id: number;
            name: 'string';
        }
    ];
}

export interface MovieDataTransferObject {
    page: number;
    results: Movie[];
    total_results: number;
    total_pages: number;
}
