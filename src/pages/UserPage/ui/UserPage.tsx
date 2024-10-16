import classNames from 'classnames';
import {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from 'shared/ui/ButtonLink/Button';
import {Section} from 'shared/ui/Section/Section';
import {UserProfile} from 'entities/Customer';

const UserPage: FC = () => {
  const navigate = useNavigate();
  const navigateToRegister = (): void => {
    navigate('/');
  };

  return (
    <Section>
      <UserProfile />
      <Button onClick={navigateToRegister} className={classNames('to-registration__button')}>
        Back to main
      </Button>
    </Section>
  );
};

export default UserPage;
