import { GraphQLClient } from "graphql-request";

const endpoint = process.env.SL_SERVICE_ENDPOINT as string;

const graphQLClient = new GraphQLClient(endpoint);
graphQLClient.setHeader('X-GQL-TOKEN', process.env.SL_SERVICE_API_KEY as string);

export default graphQLClient;