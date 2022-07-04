export const albumResolvers = {
    Query: {
        albums: (_: any, __: any, {dataSources}: any) => {
            return dataSources.albumAPI.getAlbums();
        },
        album: (_: any, {id}: { id: string }, { dataSources }: any) => {
            return dataSources.albumAPI.getAlbum(id);
        },
    },

    Album: {
        id: (parent: { _id: string; }) => parent._id,
    }
};
