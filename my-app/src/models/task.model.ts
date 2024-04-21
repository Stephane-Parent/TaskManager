export enum WorkOrderPriority {
  low = 'LOW',
  medium = 'MEDIUM',
  high = 'HIGH',
}

export type DateNumber = number;

export interface WorkOrderBase {
  title: string;
  description?: string;
  priority: WorkOrderPriority;
  dueDate: DateNumber;
}

export interface WorkOrder extends WorkOrderBase {
  id: string;
}
