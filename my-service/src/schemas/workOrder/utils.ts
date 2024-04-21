import { WorkOrder } from './model';

export const getOrganisedWorkOrder = (workOrders: WorkOrder[]) => {
  return workOrders.sort((workOrderA, workOrderB) => {
    const daysFromNowOrderA = getNumbersOfDays(workOrderA.dueDate);
    const daysFromNowOrderB = getNumbersOfDays(workOrderB.dueDate);

    if (daysFromNowOrderA === daysFromNowOrderB) {
      const priorityLevelOrderA = getPriorityLevel(workOrderA.priority);
      const priorityLevelOrderB = getPriorityLevel(workOrderB.priority);
      return priorityLevelOrderA === priorityLevelOrderB ? 0 : priorityLevelOrderA > priorityLevelOrderB ? 1 : -1;
    }

    return daysFromNowOrderA > daysFromNowOrderB ? 1 : -1;
  });
};

const getNumbersOfDays = (date: number) => {
  const ONE_DAY = 24 * 60 * 60 * 1000;
  return Math.floor(date / ONE_DAY);
};

const getPriorityLevel = (priority) => {
  switch (priority) {
    case 'LOW':
      return 3;
    case 'MEDIUM':
      return 2;
    case 'HIGH':
      return 1;
    default:
      return 0;
  }
};
