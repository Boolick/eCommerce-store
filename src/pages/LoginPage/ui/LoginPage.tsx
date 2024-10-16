import classNames from 'classnames';
import {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from 'shared/ui/ButtonLink/Button';
import {Section} from 'shared/ui/Section/Section';
import {LoginByUserName} from '../../../features/loginForm';

const LoginPage: FC = () => {
  const navigate = useNavigate();
  const navigateToRegister = (): void => {
    navigate('/registration');
  };

  return (
    <Section>
      <h2>Login</h2>
      <LoginByUserName></LoginByUserName>
      <Button onClick={navigateToRegister} className={classNames('to-registration__button')}>
        REGISTRATION
      </Button>
    </Section>
  );
};

export default LoginPage;
