import classNames from 'classnames';
import {FC} from 'react';
import {NavLink} from 'react-router-dom';
import cls from './MenuLink.module.scss';

interface MenuLinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
}

const MenuLink: FC<MenuLinkProps> = (props) => {
  const {to, className, children, ...otherProps} = props;
  return (
    <NavLink
      to={to}
      className={({isActive}) =>
        [classNames(cls.MenuLink, className), isActive ? cls.active : ''].join(' ')
      }
      {...otherProps}
    >
      {children}
    </NavLink>
  );
};

export {MenuLink};
