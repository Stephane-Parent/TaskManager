import { ApolloServer, gql } from 'apollo-server';
import { DB } from './src/DB/fakeDatabase';
import { create } from 'domain';
import { v4 } from 'uuid';
import { typeDefsWorkOrder } from './src/schemas/workOrder/type-defs';
import { resolversWorkOrder } from './src/schemas/workOrder/resolvers';

const server = new ApolloServer({ typeDefs: typeDefsWorkOrder, resolvers: resolversWorkOrder });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
