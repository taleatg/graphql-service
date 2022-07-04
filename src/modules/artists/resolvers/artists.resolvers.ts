export const artistResolvers = {
    Query: {
        artists: (_: any, __: any, {dataSources}: any) => {
            return dataSources.artistAPI.getArtists();
        },
        artist: (_: any, {id}: { id: string }, { dataSources }: any) => {
            return dataSources.artistAPI.getArtist(id);
        },
    },

    Album: {
        id: (parent: { _id: string; }) => parent._id,
    }
};
