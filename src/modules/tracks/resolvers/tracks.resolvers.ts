export const trackResolvers = {
    Query: {
        tracks: (_: any, __: any, {dataSources}: any) => {
            return dataSources.trackAPI.getTracks();
        },
        track: (_: any, {trackId}: { trackId: string }, { dataSources }: any) => {
            return dataSources.trackAPI.getTrack(trackId);
        },
    },
};
