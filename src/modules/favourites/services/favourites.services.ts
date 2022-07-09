const { RESTDataSource } = require('apollo-datasource-rest');

export class FavouritesAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.FAVOURITES_URL;
    }

    async getFavourites(limit: number, offset: number) {
        return await this.get(`/?limit=${limit}&offset=${offset}`, {}, { headers: { authorization: this.context.token } });
    }

    async addToFavourites(type: string, id: string) {
        return await this.put('/add', { type, id }, { headers: { authorization: this.context.token } });
    }

    async removeToFavourites(type: string, id: string) {
        return await this.put('/remove', { type, id }, { headers: { authorization: this.context.token } });
    }
}
