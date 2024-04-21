export interface NewWorkOrderInput {
  title: string;
  description: string;
  priority: string;
  dueDate: number;
}

export interface WorkOrder extends NewWorkOrderInput {
  id: string;
}
