export const genreResolvers = {
    Query: {
        genres: (_: any, __: any, {dataSources}: any) => {
            return dataSources.genreAPI.getGenres();
        },
        genre: (_: any, {id}: { id: string }, { dataSources }: any) => {
            return dataSources.genreAPI.getGenre(id);
        },
    },

    Genre: {
        id: (parent: { _id: string; }) => parent._id,
    }
};
