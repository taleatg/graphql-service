import { ArtistInput, Band } from '../../../interfaces';

export const artistResolvers = {
    Query: {
        artists: (_: any, __: any, { dataSources }: any) => {
            return dataSources.artistAPI.getArtists();
        },
        artist: (_: any, { id }: { id: string }, { dataSources }: any) => {
            return dataSources.artistAPI.getArtist(id);
        },
    },

    Artist: {
        id: (parent: { _id: string; }) => parent._id,

        bands: ({ bandsIds }: any, _: any, { dataSources }: any) => {
            const allBands: Band[] = [];

            if (Array.isArray(bandsIds) && bandsIds.length) {
                bandsIds.forEach((bandId: string) => {
                    allBands.push(dataSources.bandAPI.getBand(bandId));
                });
            }

            return allBands;
        },
    },

    Mutation: {
        createArtist: (_: any, { createArtistInput }: { createArtistInput: ArtistInput }, { dataSources }: any) => {
            if (!dataSources.artistAPI.context.token) return;
            return dataSources.artistAPI.createArtist(createArtistInput);
        },

        updateArtist: (_: any, { updateArtistInput, id }: { updateArtistInput: ArtistInput, id: string }, { dataSources }: any) => {
            if (!dataSources.artistAPI.context.token) return;
            return dataSources.artistAPI.updateArtist(id, updateArtistInput);
        },

        deleteArtist: (_: any, { id }: { id: string }, { dataSources }: any) => {
            if (!dataSources.artistAPI.context.token) return;
            return dataSources.artistAPI.deleteArtist(id);
        },
    }
};
