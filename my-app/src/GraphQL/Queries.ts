import { gql } from '@apollo/client';

export const GET_ALL_WORK_ORDERS = gql`
  query getAllWorkOrders {
    getAllWorkOrders {
      priority
      description
      title
      dueDate
      id
    }
  }
`;

export const SAVE_WORK_ORDER = gql`
  mutation CreateWorkOrder($input: CreateWorkOrderInput!) {
    createWorkOrder(input: $input) {
      id
      title
      description
      priority
      dueDate
    }
  }
`;
