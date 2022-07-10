const fs = require('fs');

const schema = [
    './src/modules/albums/schemas/albums.graphql',
    './src/modules/artists/schemas/artists.graphql',
    './src/modules/bands/schemas/bands.graphql',
    './src/modules/favourites/schemas/favourites.graphql',
    './src/modules/genres/schemas/genres.graphql',
    './src/modules/tracks/schemas/tracks.graphql',
    './src/modules/users/schemas/users.graphql',
];

let defs: string[] = [];

const getSchema = () => {
    schema.map((item) => {
        const result = fs.readFileSync(item, 'utf8');
        defs.push(result);
    });

    defs.push(`
        type Delete {
            acknowledged: Boolean
            deletedCount: Int
        }
    `)
}

getSchema();

export const typeDefs = defs.join('\n\n');
