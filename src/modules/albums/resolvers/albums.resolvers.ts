import { AlbumInput, Artist, Band, Genre, Track } from '../../../interfaces';

export const albumResolvers = {
    Query: {
        albums: (_: any, __: any, { dataSources }: any) => {
            return dataSources.albumAPI.getAlbums();
        },
        album: (_: any, {id}: { id: string }, { dataSources }: any) => {
            return dataSources.albumAPI.getAlbum(id);
        },
    },

    Album: {
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

        tracks: ({ trackIds }: any, _: any, { dataSources }: any) => {
            const allTracks: Track[] = [];

            if (Array.isArray(trackIds) && trackIds.length) {
                trackIds.forEach((trackId: string) => {
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
    },Mutation: {
        createAlbum: (_: any, { createAlbumInput }: { createAlbumInput: AlbumInput }, { dataSources }: any) => {
            if (!dataSources.albumAPI.context.token) return;
            return dataSources.albumAPI.createAlbum(createAlbumInput);
        },

        updateAlbum: (_: any, { updateAlbumInput, id }: { updateAlbumInput: AlbumInput, id: string }, { dataSources }: any) => {
            if (!dataSources.albumAPI.context.token) return;
            return dataSources.albumAPI.updateAlbum(id, updateAlbumInput);
        },

        deleteAlbum: (_: any, { id }: { id: string }, { dataSources }: any) => {
            if (!dataSources.albumAPI.context.token) return;
            return dataSources.albumAPI.deleteAlbum(id);
        },
    }


};
