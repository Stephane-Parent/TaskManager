import { DB } from '../../DB/fakeDatabase';
import { getOrganisedWorkOrder } from './utils';

export const getAllWorkOrders = () => {
  return getOrganisedWorkOrder(DB);
};
