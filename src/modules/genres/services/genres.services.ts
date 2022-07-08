import { GenreInput } from "../../../interfaces";

const { RESTDataSource } = require('apollo-datasource-rest');

export class GenreAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.GENRES_URL;
    }

    getGenres() {
        return this.get('/').then((res: { items: any[] }) =>
            res.items.map((genre: any) => ({
                ...genre,
            }))
        )
    }

    getGenre(genreId: string) {
        return this.get(`/${genreId}`);
    }

    async createGenre(data: GenreInput) {
        return await this.post('/', { ...data }, { headers: { authorization: this.context.token } });
    }

    async updateGenre(id: string, data: GenreInput) {
        return await this.put(`/${id}`, { ...data }, { headers: { authorization: this.context.token } });
    }

    async deleteGenre(id: string) {
        return await this.delete(`/${id}`, {}, { headers: { authorization: this.context.token } });
    }
}
