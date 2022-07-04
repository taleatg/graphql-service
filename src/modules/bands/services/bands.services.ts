const { RESTDataSource } = require('apollo-datasource-rest');

export class BandAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.BANDS_URL;
    }

    getBands() {
        return this.get('/').then((res: { items: any[] }) =>
            res.items.map((band: any) => ({
                ...band,
            }))
        )
    }

    getBand(bandId: string) {
        return this.get(`/${bandId}`);
    }
}
