import {FC} from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonLink {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
}

const Button: FC<ButtonLink> = ({onClick, children, className}) => {
  return (
    <button className={classNames(styles.button, className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
