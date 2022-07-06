import { Album } from '../../../interfaces';

const { RESTDataSource } = require('apollo-datasource-rest');

export class AlbumAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.ALBUMS_URL;
    }

    getAlbums() {
        return this.get('/').then((res: { items: Album[] }) =>
            res.items.map((album: Album) => ({
                ...album,
                artists: album.artistsIds,
                bands: album.bandsIds,
                tracks: album.trackIds,
                genres: album.genresIds
            }))
        )
    }

    getAlbum(albumId: string) {
        return this.get(`/${albumId}`);
    }
}
