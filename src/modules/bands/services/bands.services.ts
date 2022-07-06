import { Band } from '../../../interfaces';

const { RESTDataSource } = require('apollo-datasource-rest');

export class BandAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.BANDS_URL;
    }

    getBands() {
        return this.get('/').then((res: { items: Band[] }) =>
            res.items.map((band: Band) => ({
                ...band,
                genres: band.genresIds,
            }))
        )
    }

    getBand(bandId: string) {
        return this.get(`/${bandId}`);
    }
}
