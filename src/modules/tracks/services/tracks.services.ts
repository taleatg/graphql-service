import { TrackInput } from "../../../interfaces";

const { RESTDataSource } = require('apollo-datasource-rest');

export class TrackAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.TRACKS_URL;
    }

    getTracks(limit = 5, offset = 0) {
        return this.get(`/?limit=${limit}&offset=${offset}`).then((res: { items: any[] }) =>
            res.items.map((track: any) => ({
                ...track,
                genres: track.genresIds,
                bands: track.bandsIds,
                album: track.albumId,
                artists: track.artistsIds,
            }))
        )
    }

    getTrack(trackId: string) {
        return this.get(`/${trackId}`);
    }

    async createTrack(data: TrackInput) {
        return await this.post('/', { ...data }, { headers: { authorization: this.context.token } });
    }

    async updateTrack(id: string, data: TrackInput) {
        return await this.put(`/${id}`, { ...data }, { headers: { authorization: this.context.token } });
    }

    async deleteTrack(id: string) {
        return await this.delete(`/${id}`, {}, { headers: { authorization: this.context.token } });
    }
}
