import {FC} from 'react';
import classNames from 'classnames';
import Logo from 'shared/assets/img/logo.svg';
import IconBag from 'shared/assets/icons/icon-bag.svg';
import IconHome from 'shared/assets/icons/icon-home.svg';
import IconLogin from 'shared/assets/icons/icon-login.svg';
import IconLogout from 'shared/assets/icons/icon-logout.svg';
import IconRegister from 'shared/assets/icons/icon-register.svg';
import IconUser from 'shared/assets/icons/icon-user.svg';
import AboutUs from 'shared/assets/icons/about-us.svg';
import {MenuLink} from 'shared/ui/MenuLink/MenuLink';
import {useLogged} from 'app/providers/LoggedProvider';
import {useDispatch} from 'react-redux';
import {NavLink, useNavigate} from 'react-router-dom';
import {clearUser} from 'entities/Customer';
import {AppRoutes, RoutePath} from 'app/providers/AppRouter/config/routeConfig';
import cls from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

const HeaderTop: FC = () => {
  const {logged, toggleLogged} = useLogged();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clickHandler = (): void => {
    toggleLogged();
    dispatch(clearUser());
    navigate(RoutePath[AppRoutes.MAIN]);
  };

  return (
    <div className={cls.HeaderTop}>
      <div className={classNames(cls.container, 'container')}>
        <span className={cls.logo} aria-hidden="true">
          <Logo width="197" height="30" />
        </span>
        <h1 className="visually-hidden">eCommerce</h1>
        <div className={cls.HeaderNav}>
          <MenuLink to="/">
            <span>Home</span>
            <IconHome />
          </MenuLink>
          <MenuLink to="/about_us">
            <span>About Us</span>
            <AboutUs />
          </MenuLink>
          {!logged && (
            <MenuLink to="/registration">
              <span>Register</span>
              <IconRegister />
            </MenuLink>
          )}
          {!logged && (
            <MenuLink to="/login">
              <span>Login</span>
              <IconLogin />
            </MenuLink>
          )}
          {logged && (
            <>
              <button className={cls.MenuButton} type="button" onClick={clickHandler}>
                <span>Logout</span>
                <IconLogout />
              </button>
              <div className={cls.IconUser}>
                <IconUser onClick={() => navigate('/user')} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const HeaderFilter: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={cls.HeaderFilter}>
      <div className={classNames(cls.container, 'container')}>
        <div className={cls.filters}>
          <button className={cls.filter} type="button">
            Fenix Premium
          </button>
          <button className={cls.filter} type="button">
            Rehabilitation
          </button>
          <NavLink to="/catalog" className={cls.filter}>
            <span>Catalog</span>
          </NavLink>
        </div>
        <button
          className={cls.cart}
          onClick={() => navigate(RoutePath[AppRoutes.CART])}
          type="button"
          aria-label="Goto cart"
        >
          <IconBag />
        </button>
      </div>
    </div>
  );
};

export const Header: FC<HeaderProps> = ({className}: HeaderProps) => (
  <header className={classNames(cls.Header, className)}>
    <HeaderTop />
    <HeaderFilter />
  </header>
);
