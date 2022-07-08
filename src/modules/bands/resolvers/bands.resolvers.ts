import { BandInput, Genre } from '../../../interfaces';

export const bandResolvers = {
    Query: {
        bands: (_: any, __: any, { dataSources }: any) => {
            return dataSources.bandAPI.getBands();
        },
        band: (_: any, { id }: { id: string }, { dataSources }: any) => {
            return dataSources.bandAPI.getBand(id);
        },
    },

    Band: {
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
    },

    Mutation: {
        createBand: (_: any, { createBandInput }: { createBandInput: BandInput }, { dataSources }: any) => {
            if (!dataSources.bandAPI.context.token) return;
            return dataSources.bandAPI.createBand(createBandInput);
        },

        updateBand: (_: any, { updateBandInput, id }: { updateBandInput: BandInput, id: string }, { dataSources }: any) => {
            if (!dataSources.bandAPI.context.token) return;
            return dataSources.bandAPI.updateBand(id, updateBandInput);
        },

        deleteBand: (_: any, { id }: { id: string }, { dataSources }: any) => {
            if (!dataSources.bandAPI.context.token) return;
            return dataSources.bandAPI.deleteBand(id);
        },
    }
};
