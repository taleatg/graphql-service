const { RESTDataSource } = require('apollo-datasource-rest');

export class AlbumAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.ALBUMS_URL;
    }

    getAlbums() {
        return this.get('/').then((res: { items: any[] }) =>
            res.items.map((album: any) => ({
                ...album,
            }))
        )
    }

    getAlbum(albumId: string) {
        return this.get(`/${albumId}`);
    }
}
