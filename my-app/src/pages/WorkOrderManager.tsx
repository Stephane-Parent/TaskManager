import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { RoundedButton } from '../components/buttons/RoundedButton';
import { TaskCard } from '../components/cards/WorkOrderCard';
import { useGetWorkOrders } from '../hooks/useGetWorkOrders';
import styles from './WorkOrderManager.module.css';

export const WorkOrderManager: React.FC = () => {
  const navigation = useNavigate();
  const handleAddTask = () => {
    navigation('/createTask');
  };

  const { getAllWorkOrders, isLoading, data } = useGetWorkOrders();
  const hasData = data?.getAllWorkOrders?.length && data?.getAllWorkOrders?.length > 0;

  useEffect(() => {
    getAllWorkOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // TODO: Add loading spinner
  const LoadingSpinner = <div>Loading...</div>;

  // TODO: Enhance this component
  const EmptyWorkOrder = (
    <p className={styles.text}>
      No work order. <br /> Add a work order with the Add Work Order button above
    </p>
  );

  const WorkOrders = data?.getAllWorkOrders.map((workOrder: any) => {
    return (
      <TaskCard
        key={workOrder.id}
        title={workOrder.title}
        description={workOrder.description}
        priority={workOrder.priority}
        dueDate={workOrder.dueDate}
      />
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles['add-button-container']}>
        <RoundedButton onClick={handleAddTask}>Add work order +</RoundedButton>
      </div>
      <div className={styles['task-container']}>
        <h1 className={styles.text}>Work Force Manager</h1>
        <p className={styles.text}>Work Force Manager is a tool that helps you manage your task.</p>
        {isLoading ? LoadingSpinner : hasData ? WorkOrders : EmptyWorkOrder}
      </div>
    </div>
  );
};
