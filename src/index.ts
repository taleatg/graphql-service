import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema';
import * as dotenv from 'dotenv';

const server = new ApolloServer({ typeDefs });

dotenv.config();

const PORT = process.env.PORT || 3000;

server.listen(PORT).then(() => {
    console.log(`
        🚀  Server is running!
        🔉  Listening on port ${PORT}
    `);
});
