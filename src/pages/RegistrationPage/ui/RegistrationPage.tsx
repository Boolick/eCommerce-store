import classNames from 'classnames';
import RegistrationForm from 'features/RegisterForm/ui/RegistrationForm';
import {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from 'shared/ui/ButtonLink/Button';
import {Section} from 'shared/ui/Section/Section';

const RegistrationPage: FC = () => {
  const navigate = useNavigate();
  const navigateToLogin = (): void => {
    navigate('/login');
  };

  return (
    <Section>
      <h2>Register</h2>
      <RegistrationForm></RegistrationForm>
      <Button onClick={navigateToLogin} className={classNames('to-login__button')}>
        Already have an account? Login
      </Button>
    </Section>
  );
};

export default RegistrationPage;
