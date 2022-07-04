const { RESTDataSource } = require('apollo-datasource-rest');

export class TrackAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.TRACKS_URL;
    }

    getTracks() {
        return this.get('/').then((res: { items: any[] }) =>
            res.items.map((track: any) => ({
                ...track,
            }))
        )
    }

    getTrack(trackId: string) {
        return this.get(`/${trackId}`);
    }
}
