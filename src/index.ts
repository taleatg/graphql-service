const { ApolloServer } = require('apollo-server');
import { typeDefs } from './schema';
import * as dotenv from 'dotenv';
import resolvers from './resolvers';
import { TrackAPI } from './modules/tracks/services/tracks.services';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            trackAPI: new TrackAPI()
        };
    }
});

dotenv.config();

const PORT = process.env.PORT || 3000;

server.listen(PORT).then(() => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
