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
    budget: number;
    runtime: number;
    status: string;
    genres: Genre[];
    production_countries: ProductionCountries[];
    production_companies: ProductionCompanies[];
}

export interface Genre {
    id: number;
    name: string;
}

export interface ProductionCountries {
    name: string;
}

export interface ProductionCompanies {
    name: string;
}

export interface MovieDataTransferObject {
    page: number;
    results: Movie[];
    total_results: number;
    total_pages: number;
}

export interface MovieVideoDataTransferObject {
    id: number;
    results: MovieVideo[];
}

export interface MovieVideo {
    site: string;
    key: string;
    name: string;
}

export interface MovieImages {
    backdrops: [
        {
            file_path: string;
        }
    ];
}

export interface MovieCredits {
    cast: [
        {
            name: string;
            character: string;
            profile_path?: string;
            known_for_department?: string;
        }
    ];
}
