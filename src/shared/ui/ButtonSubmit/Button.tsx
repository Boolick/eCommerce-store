import {FC} from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonSubmit {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: FC<ButtonSubmit> = ({onClick, children, className, type, disabled}) => {
  return (
    <button
      className={classNames(styles.button, className)}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
