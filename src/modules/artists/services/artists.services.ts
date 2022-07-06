import { Artist } from '../../../interfaces';

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
}
