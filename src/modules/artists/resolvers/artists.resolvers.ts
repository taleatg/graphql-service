import { Band } from '../../../interfaces';

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
    }
};
