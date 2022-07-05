import { RESTDataSource } from 'apollo-datasource-rest';

export class UserAPI extends RESTDataSource  {
    constructor() {
        super();
        this.baseURL = process.env.USERS_URL;
    }

    async getJWT(email: string, password: string) {
        const data = await this.post('/login', { email, password });
        data.id = data._id;
        return data;
    }

    getUser(userId: string) {
        return this.get(`/${userId}`);
    }

    async registerUser(userData: any) {
        return await this.post('/register', {...userData});
    }
}
