export const userResolvers = {
    Query: {
        user: (_: any, {id}: { id: string }, { dataSources }: any) => {
            return dataSources.userAPI.getUser(id);
        },
        jwt: (_: any, { email, password }: any, { dataSources } : any) => {
            return dataSources.userAPI.getJWT(email, password);
        }
    },

    User: {
       id: (parent: { _id: string }) => parent._id,
    },

    Mutation: {
        register: (_: any, data: any, { dataSources }: any) => {
            return dataSources.userAPI.registerUser(data);
        }
    }
}
