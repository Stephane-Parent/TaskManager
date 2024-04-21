import { DateNumber } from '../models/task.model';

export const getFormattedDate = (date: DateNumber): string => {
  const dateString = new Date(date);
  const formattedDate = `${dateString.getDate()} ${dateString.toLocaleString('default', { month: 'long' })}`;
  return formattedDate;
};
