export const trackResolvers = {
    Query: {
        tracks: (_: any, __: any, {dataSources}: any) => {
            return dataSources.trackAPI.getTracks();
        },
        track: (_: any, {id}: { id: string }, { dataSources }: any) => {
            return dataSources.trackAPI.getTrack(id);
        },
    },

    Track: {
        id: (parent: { _id: string; }) => parent._id,
    }
};
