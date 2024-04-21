import { useLazyQuery } from '@apollo/client';
import { GET_ALL_WORK_ORDERS } from '../GraphQL/Queries';
import { WorkOrder } from '../models/task.model';

export const useGetWorkOrders = () => {
  const [getAllWorkOrders, { error, data, loading }] = useLazyQuery<{ getAllWorkOrders: WorkOrder[] }>(
    GET_ALL_WORK_ORDERS,
  );

  if (error) {
    // TODO: show alert to user
    console.log(error);
  }

  return { getAllWorkOrders, data, isLoading: loading };
};
