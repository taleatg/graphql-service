export interface Artist {
    _id: string;
    firstName: string;
    secondName: string;
    middleName: string;
    birthDate: string;
    birthPlace: string;
    country: string;
    bandsIds: string[]
    instruments: string[];
}

export interface ArtistInput {
    firstName?: string;
    secondName?: string;
    middleName?: string;
    birthDate?: string;
    birthPlace?: string;
    country?: string;
    bandsIds?: string[]
    instruments?: string[];
}

export interface User {
    firstName?: string;
    lastName?: string;
    password?: string;
    email?: string;
}

export interface Member {
    _id: string;
    firstName: string;
    secondName: string;
    middleName: string;
    instrument: string;
    years: [string]
}

export interface Band {
    _id: string;
    name: string;
    origin: string;
    members: Member[];
    website: string;
    genresIds: string[];
}

export interface BandInput {
    name?: string;
    origin?: string;
    members?: Member[];
    website?: string;
    genresIds?: string[];
}

export interface Genre {
    _id: string;
    name: string;
    description: string;
    country: string;
    year: string;
}

export interface GenreInput {
    name?: string;
    description?: string;
    country?: string;
    year?: string;
}

export interface Track {
    _id: string;
    title: string;
    albumId: string;
    artistsIds: string[];
    bandsIds: string[];
    duration: number;
    released: number;
    genresIds: string[];
}

export interface TrackInput {
    title?: string;
    albumId?: string;
    artistsIds?: string[];
    bandsIds?: string[];
    duration?: number;
    released?: number;
    genresIds?: string[];
}

export interface Album {
    _id: string;
    name: string;
    released: number;
    artistsIds: string[];
    bandsIds: string[];
    trackIds: string[];
    genresIds: string[];
    image: string;
}

export interface AlbumInput {
    name?: string;
    released?: number;
    artistsIds?: string[];
    bandsIds?: string[];
    trackIds?: string[];
    genresIds?: string[];
    image?: string;
}
