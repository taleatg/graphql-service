import { Artist, Band, Genre, TrackInput } from '../../../interfaces';

export const trackResolvers = {
    Query: {
        tracks: (_: any, __: any, { dataSources }: any) => {
            return dataSources.trackAPI.getTracks();
        },
        track: (_: any, {id}: { id: string }, { dataSources }: any) => {
            return dataSources.trackAPI.getTrack(id);
        },
    },

    Track: {
        id: (parent: { _id: string; }) => parent._id,

        genres: ({ genresIds }: any, _: any, { dataSources }: any) => {
            const allGenres: Genre[] = [];

            if (Array.isArray(genresIds) && genresIds.length) {
                genresIds.forEach((genreId: string) => {
                    allGenres.push(dataSources.genreAPI.getGenre(genreId));
                });
            }

            return allGenres;
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

        album: ({ albumId }: any, _: any, { dataSources }: any) => {
            return dataSources.albumAPI.getAlbum(albumId);
        },

        artists: ({ artistsIds }: any, _: any, { dataSources }: any) => {
            const allArtists: Artist[] = [];

            if (Array.isArray(artistsIds) && artistsIds.length) {
                artistsIds.forEach((artistId: string) => {
                    allArtists.push(dataSources.artistAPI.getArtist(artistId));
                });
            }

            return allArtists;
        },
    },

    Mutation: {
        createTrack: (_: any, { createTrackInput }: { createTrackInput: TrackInput }, { dataSources }: any) => {
            if (!dataSources.trackAPI.context.token) return;
            return dataSources.trackAPI.createTrack(createTrackInput);
        },

        updateTrack: (_: any, { updateTrackInput, id }: { updateTrackInput: TrackInput, id: string }, { dataSources }: any) => {
            if (!dataSources.trackAPI.context.token) return;
            return dataSources.trackAPI.updateTrack(id, updateTrackInput);
        },

        deleteTrack: (_: any, { id }: { id: string }, { dataSources }: any) => {
            if (!dataSources.trackAPI.context.token) return;
            return dataSources.trackAPI.deleteTrack(id);
        },
    }
};
