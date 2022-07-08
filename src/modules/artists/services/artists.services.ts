import { Artist, ArtistInput } from '../../../interfaces';

const { RESTDataSource } = require('apollo-datasource-rest');

export class ArtistAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.ARTISTS_URL;
    }

    getArtists() {
        return this.get('/').then((res: { items: Artist[] }) =>
            res.items.map((artist: Artist) => ({
                ...artist,
                bands: artist.bandsIds,
            }))
        )
    }

    getArtist(artistId: string) {
        return this.get(`/${artistId}`);
    }

    async createArtist(data: ArtistInput) {
        return await this.post('/', { ...data }, { headers: { authorization: this.context.token } });
    }

    async updateArtist(id: string, data: ArtistInput) {
        return await this.put(`/${id}`, { ...data }, { headers: { authorization: this.context.token } });
    }

    async deleteArtist(id: string) {
        return await this.delete(`/${id}`, {}, { headers: { authorization: this.context.token } });
    }
}
