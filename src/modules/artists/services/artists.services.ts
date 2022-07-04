const { RESTDataSource } = require('apollo-datasource-rest');

export class ArtistAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.ARTISTS_URL;
    }

    getArtists() {
        return this.get('/').then((res: { items: any[] }) =>
            res.items.map((artist: any) => ({
                ...artist,
            }))
        )
    }

    getArtist(artistId: string) {
        return this.get(`/${artistId}`);
    }
}
