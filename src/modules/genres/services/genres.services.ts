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
}
