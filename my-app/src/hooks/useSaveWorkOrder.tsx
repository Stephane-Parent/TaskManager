import { useMutation } from '@apollo/client';
import { SAVE_WORK_ORDER } from '../GraphQL/Queries';

export const useSaveWorkOrder = () => {
  const [createWorkOrder, { loading, error, data }] = useMutation(SAVE_WORK_ORDER);
  const hasSave = !loading && !error && !!data;
  if (error) {
    // TODO: show alert to user
    console.log(error);
  }

  return { createWorkOrder, isSaving: loading, hasSave };
};
