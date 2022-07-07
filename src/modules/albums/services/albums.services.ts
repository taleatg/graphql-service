import { Album, AlbumInput } from '../../../interfaces';

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

    async createAlbum(data: AlbumInput) {
        return await this.post('/', { ...data }, { headers: { authorization: this.context.token } });
    }

    async updateAlbum(id: string, data: AlbumInput) {
        return await this.put(`/${id}`, { ...data }, { headers: { authorization: this.context.token } });
    }

    async deleteAlbum(id: string) {
        return await this.delete(`/${id}`, {}, { headers: { authorization: this.context.token } });
    }
}
