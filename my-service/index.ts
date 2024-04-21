import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';
import { v4 } from 'uuid';
import { DB } from './src/fakeDatabase';

const PORT = 6969;
const WorkOrderType = new GraphQLObjectType({
  name: 'WorkOrder',
  fields: {
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    priority: { type: GraphQLString },
    dueDate: { type: GraphQLInt },
  },
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getAllWorkOrders: {
      type: new GraphQLList(WorkOrderType),
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return DB;
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createWorkOrder: {
      type: WorkOrderType,
      args: {
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        priority: { type: GraphQLString },
        dueDate: { type: GraphQLInt },
      },
      resolve(parent, args) {
        const newWorkOrder = {
          id: v4(),
          title: args.title,
          description: args.description,
          priority: args.priority,
          dueDate: args.dueDate,
        };

        return newWorkOrder;
      },
    },
  },
});

const schema = new GraphQLSchema({ query: RootQuery, mutation: Mutation });

const app = express();
app.use(express.json());
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));
app.listen(PORT, () => {
  console.log('Server is running on port 6969');
});
