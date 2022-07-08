import { Band, BandInput } from '../../../interfaces';

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

    async createBand(data: BandInput) {
        return await this.post('/', { ...data }, { headers: { authorization: this.context.token } });
    }

    async updateBand(id: string, data: BandInput) {
        return await this.put(`/${id}`, { ...data }, { headers: { authorization: this.context.token } });
    }

    async deleteBand(id: string) {
        return await this.delete(`/${id}`, {}, { headers: { authorization: this.context.token } });
    }
}
