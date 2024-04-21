import React from 'react';
import styles from './RoundedButton.module.css';

export interface RoundedButtonProps {
  onClick: () => void;
}
export const RoundedButton: React.FC<React.PropsWithChildren & RoundedButtonProps> = ({ children, onClick }) => {
  return (
    <button className={styles.button} type="submit" onClick={onClick}>
      {children}
    </button>
  );
};
