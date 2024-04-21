import { v4 } from 'uuid';
import { DB } from '../../DB/fakeDatabase';
import { NewWorkOrderInput } from './model';

export const createWorkOrder = (_, { input }: { input: NewWorkOrderInput }) => {
  const uuid = v4();
  const newWorkOrder = { ...input, id: uuid };
  DB.push(newWorkOrder);
  return newWorkOrder;
};
