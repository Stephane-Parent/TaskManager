import { createWorkOrder } from './mutation';
import { getAllWorkOrders } from './query';

export const resolversWorkOrder = {
  Query: { getAllWorkOrders },
  Mutation: { createWorkOrder },
};
