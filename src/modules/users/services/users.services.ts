import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';

export class UserAPI extends RESTDataSource  {
    constructor() {
        super();
        this.baseURL = process.env.USERS_URL;
    }

    willSendRequest(request: RequestOptions) {
        request.headers.set('Authorization', `Bearer ${this.context.token}`);
    }

    async getJWT(email: string, password: string) {
        const data = await this.post('/login', { email, password });
        this.context.token = data.jwt;
        return data;
    }

    getUser(userId: string) {
        return this.get(`/${userId}`);
    }

    async registerUser(userData: any) {
        return await this.post('/register', {...userData});
    }
}
