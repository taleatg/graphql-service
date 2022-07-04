const { ApolloServer } = require('apollo-server');
import { typeDefs } from './schema';
import * as dotenv from 'dotenv';
import resolvers from './resolvers';
import { TrackAPI } from './modules/tracks/services/tracks.services';
import { AlbumAPI } from './modules/albums/services/albums.services';
import { ArtistAPI } from './modules/artists/services/artists.services';
import { BandAPI } from './modules/bands/services/bands.services';
import { GenreAPI } from './modules/genres/services/genres.services';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            albumAPI: new AlbumAPI(),
            artistAPI: new ArtistAPI(),
            bandAPI: new BandAPI(),
            genreAPI: new GenreAPI(),
            trackAPI: new TrackAPI(),
        };
    }
});

dotenv.config();

const PORT = process.env.PORT || 3000;

server.listen(PORT).then(() => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
