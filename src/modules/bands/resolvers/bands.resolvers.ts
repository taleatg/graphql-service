export const bandResolvers = {
    Query: {
        bands: (_: any, __: any, {dataSources}: any) => {
            return dataSources.bandAPI.getBands();
        },
        band: (_: any, {id}: { id: string }, { dataSources }: any) => {
            return dataSources.bandAPI.getBand(id);
        },
    },

    Band: {
        id: (parent: { _id: string; }) => parent._id,
    }
};
