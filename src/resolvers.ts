import { albumResolvers } from './modules/albums/resolvers/albums.resolvers';
import { artistResolvers } from './modules/artists/resolvers/artists.resolvers';
import { bandResolvers } from './modules/bands/resolvers/bands.resolvers';
import { genreResolvers } from './modules/genres/resolvers/genres.resolvers';
import { trackResolvers } from './modules/tracks/resolvers/tracks.resolvers';
import { userResolvers } from './modules/users/resolvers/users.resolvers';

export default [
    albumResolvers,
    artistResolvers,
    bandResolvers,
    genreResolvers,
    trackResolvers,
    userResolvers
]