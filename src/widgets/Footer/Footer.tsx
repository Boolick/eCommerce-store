import {FC} from 'react';
import classNames from 'classnames';
import cls from './Footer.module.scss';

interface FooterProps {
  className?: string;
}

const Footer: FC = ({className}: FooterProps) => (
  <footer className={classNames(cls.Footer, className)}>
    <div className={classNames(cls.container, 'container')}>
      <p>JavaScript/Front-end 2023Q4</p>
      <p>&copy; Front_Not_End Team</p>
    </div>
  </footer>
);

export {Footer};
