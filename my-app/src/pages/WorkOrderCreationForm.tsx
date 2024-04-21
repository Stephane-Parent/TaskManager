import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import styles from './WorkOrderCreationForm.module.css';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router';
import { WorkOrderPriority } from '../models/task.model';
import { RoundedButton } from '../components/buttons/RoundedButton';
import { useSaveWorkOrder } from '../hooks/useSaveWorkOrder';

export const WorkOrderCreationForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<WorkOrderPriority>(WorkOrderPriority.medium);
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();
  // TODO: send isLoading to button to show a spinner
  const { createWorkOrder } = useSaveWorkOrder();

  const handleSubmit = () => {
    createWorkOrder({ variables: { input: { title, description, priority, dueDate: Date.parse(date.toString()) } } });
    // TODO: handle API response delay before navigating
    navigate('/');
    navigate(0);
  };

  return (
    <div className={styles['form-container']}>
      <h1 className={styles.title}>Create a new work order</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles['inner-container1']}>
          <label>Work Order Title</label>
          <input
            className={styles['title-input']}
            required
            placeholder="Enter your work order title"
            type="text"
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <label>Work Order Description</label>
          <textarea
            className={styles['description-input']}
            placeholder="Enter your work order description (optional)"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className={styles['inner-container2']}>
          <label>Priority options</label>
          <select value={priority} onChange={(event) => setPriority(event.target.value as WorkOrderPriority)}>
            <option value={WorkOrderPriority.low}>Low</option>
            <option value={WorkOrderPriority.medium}>Medium</option>
            <option value={WorkOrderPriority.high}>High</option>
          </select>
          <label>Due Date</label>
          <DatePicker required showIcon selected={date} onChange={(date: Date) => setDate(date)} />
        </div>
        <RoundedButton onClick={handleSubmit}>Add task</RoundedButton>
      </form>
    </div>
  );
};
