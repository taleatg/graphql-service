import { GenreInput } from "../../../interfaces";

export const genreResolvers = {
    Query: {
        genres: (_: any, __: any, { dataSources }: any) => {
            return dataSources.genreAPI.getGenres();
        },
        genre: (_: any, {id}: { id: string }, { dataSources }: any) => {
            return dataSources.genreAPI.getGenre(id);
        },
    },

    Genre: {
        id: (parent: { _id: string; }) => parent._id,
    },

    Mutation: {
        createGenre: (_: any, { createGenreInput }: { createGenreInput: GenreInput }, { dataSources }: any) => {
            if (!dataSources.genreAPI.context.token) return;
            return dataSources.genreAPI.createGenre(createGenreInput);
        },

        updateGenre: (_: any, { updateGenreInput, id }: { updateGenreInput: GenreInput, id: string }, { dataSources }: any) => {
            if (!dataSources.genreAPI.context.token) return;
            return dataSources.genreAPI.updateGenre(id, updateGenreInput);
        },

        deleteGenre: (_: any, { id }: { id: string }, { dataSources }: any) => {
            if (!dataSources.genreAPI.context.token) return;
            return dataSources.genreAPI.deleteGenre(id);
        },
    }
};
