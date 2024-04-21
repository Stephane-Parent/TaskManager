import { WorkOrderBase, WorkOrderPriority } from '../../models/task.model';
import { getFormattedDate } from '../../utils/date';
import styles from './WorkOrderCard.module.css';

interface WorkOrderCardProps extends WorkOrderBase {}

export const TaskCard: React.FC<WorkOrderCardProps> = ({ title, description, priority, dueDate }) => {
  const chipColor = getColor(priority);
  return (
    <div className={styles.card}>
      <div className={styles['container-top']}>
        <h2>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles['container-sub-info']}>
        <div className={`${styles.chip} ${chipColor}`}>
          <p>{priority.toLocaleLowerCase()}</p>
        </div>
        <p>{`Due date: ${getFormattedDate(dueDate)}`}</p>
      </div>
    </div>
  );
};

const getColor = (priority: WorkOrderPriority) => {
  switch (priority) {
    case WorkOrderPriority.low:
      return styles.green;
    case WorkOrderPriority.medium:
      return styles.yellow;
    case WorkOrderPriority.high:
    default:
      return styles.red;
  }
};
