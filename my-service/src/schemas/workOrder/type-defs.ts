import { gql } from 'apollo-server';

export const typeDefsWorkOrder = gql`
  type WorkOrder {
    id: ID!
    title: String!
    description: String
    priority: WorkOrderPriority!
    dueDate: Float!
  }

  type NewWorkOrder {
    title: String!
    description: String
    priority: WorkOrderPriority!
    dueDate: Float!
  }

  type Query {
    getAllWorkOrders: [WorkOrder!]!
  }

  input CreateWorkOrderInput {
    title: String!
    description: String
    priority: WorkOrderPriority!
    dueDate: Float!
  }

  enum WorkOrderPriority {
    LOW
    MEDIUM
    HIGH
  }

  type Mutation {
    createWorkOrder(input: CreateWorkOrderInput!): WorkOrder!
  }
`;
