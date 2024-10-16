import React, {useState} from 'react';
import Button from 'shared/ui/ButtonSubmit/Button';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';

const LoginForm: React.FC = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = (): void => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <EmailInput
          email={email}
          setEmail={setEmail}
          emailError={emailError}
          setEmailError={setEmailError}
        />
        <PasswordInput
          password={password}
          setPassword={setPassword}
          passwordError={passwordError}
          setPasswordError={setPasswordError}
          showPassword={showPassword}
          toggleShowPassword={toggleShowPassword}
        />
        <Button>Login</Button>
      </form>
    </div>
  );
};
export default LoginForm;
