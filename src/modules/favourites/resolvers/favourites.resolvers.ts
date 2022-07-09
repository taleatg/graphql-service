import {Artist, Band, Genre, Track} from "../../../interfaces";

export const favouritesResolvers = {
    Query: {
        favourites: (_: any, __: any, { dataSources }: any) => {
            if (!dataSources.favouritesAPI.context.token) return;
            return dataSources.favouritesAPI.getFavourites();
        },
    },

    Favourites: {
        id: (parent: { _id: string; }) => parent._id,

        artists: ({ artistsIds }: any, _: any, { dataSources }: any) => {
            const allArtists: Artist[] = [];

            if (Array.isArray(artistsIds) && artistsIds.length) {
                artistsIds.forEach((artistId: string) => {
                    allArtists.push(dataSources.artistAPI.getArtist(artistId));
                });
            }

            return allArtists;
        },

        bands: ({ bandsIds }: any, _: any, { dataSources }: any) => {
            const allBands: Band[] = [];

            if (Array.isArray(bandsIds) && bandsIds.length) {
                bandsIds.forEach((bandId: string) => {
                    allBands.push(dataSources.bandAPI.getBand(bandId));
                });
            }

            return allBands;
        },

        tracks: ({ tracksIds }: any, _: any, { dataSources }: any) => {
            const allTracks: Track[] = [];

            if (Array.isArray(tracksIds) && tracksIds.length) {
                tracksIds.forEach((trackId: string) => {
                    allTracks.push(dataSources.trackAPI.getTrack(trackId));
                });
            }

            return allTracks;
        },

        genres: ({ genresIds }: any, _: any, { dataSources }: any) => {
            const allGenres: Genre[] = [];

            if (Array.isArray(genresIds) && genresIds.length) {
                genresIds.forEach((genreId: string) => {
                    allGenres.push(dataSources.genreAPI.getGenre(genreId));
                });
            }

            return allGenres;
        }
    },

    Mutation: {
        addTrackToFavourites: (_: any, { id }: { id: string }, { dataSources }: any) => {
            return dataSources.favouritesAPI.addToFavourites('tracks', id);
        },

        addBandToFavourites: (_: any, { id }: { id: string }, { dataSources }: any) => {
            return dataSources.favouritesAPI.addToFavourites('bands', id);
        },

        addArtistToFavourites: (_: any, { id }: { id: string }, { dataSources }: any) => {
            return dataSources.favouritesAPI.addToFavourites('artists', id);
        },

        addGenreToFavourites: (_: any, { id }: { id: string }, { dataSources }: any) => {
            return dataSources.favouritesAPI.addToFavourites('genres', id);
        },

        removeTrackToFavourites: (_: any, { id }: { id: string }, { dataSources }: any) => {
            return dataSources.favouritesAPI.removeToFavourites('tracks', id);
        },

        removeBandToFavourites: (_: any, { id }: { id: string }, { dataSources }: any) => {
            return dataSources.favouritesAPI.addToFavourites('bands', id);
        },

        removeArtistToFavourites: (_: any, { id }: { id: string }, { dataSources }: any) => {
            return dataSources.favouritesAPI.addToFavourites('artists', id);
        },

        removeGenreToFavourites: (_: any, { id }: { id: string }, { dataSources }: any) => {
            return dataSources.favouritesAPI.addToFavourites('genres', id);
        },
    }
}
