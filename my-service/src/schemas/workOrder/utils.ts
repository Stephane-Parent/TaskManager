import { WorkOrder } from './model';

export const getOrganisedWorkOrder = (workOrders: WorkOrder[]) => {
  const normalizedTodayDate = normalizeDate(Date.parse(new Date().toISOString()));

  return workOrders.sort((workOrderA, workOrderB) => {
    const daysFromNowOrderA = getDaysFromNow(normalizeDate(workOrderA.dueDate), normalizedTodayDate);
    const daysFromNowOrderB = getDaysFromNow(normalizeDate(workOrderB.dueDate), normalizedTodayDate);
    if (daysFromNowOrderA === daysFromNowOrderB) {
      const priorityLevelOrderA = getPriorityLevel(workOrderA.priority);
      const priorityLevelOrderB = getPriorityLevel(workOrderB.priority);
      return priorityLevelOrderA === priorityLevelOrderB ? 0 : priorityLevelOrderA > priorityLevelOrderB ? 1 : -1;
    }
    return daysFromNowOrderA > daysFromNowOrderB ? 1 : -1;
  });
};

const ONE_DAY = 24 * 60 * 60 * 1000;
const normalizeDate = (date: number) => {
  return Math.floor(date / ONE_DAY) * ONE_DAY;
};

const getDaysFromNow = (orderDate: number, dateNow: number) => {
  const diffDaysFromNow = Math.floor((orderDate - dateNow) / ONE_DAY);
  return diffDaysFromNow;
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
