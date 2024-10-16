import React from 'react';
import styles from './ErrorMessage.module.scss';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({message}) => {
  if (!message) return null;

  return (
    <div className={styles.error_message}>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
