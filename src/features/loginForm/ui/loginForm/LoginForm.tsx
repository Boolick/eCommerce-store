import React, {useState} from 'react';
import classNames from 'classnames';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Button from 'shared/ui/ButtonSubmit/Button';
import {useLogged} from 'app/providers/LoggedProvider';
import {LoginErrorMessage} from 'features/loginForm/model/types/types';
import {setUser, setToken, setError} from 'entities/Customer/model/slice/userSlice';
import EmailInput from '../emailInput/EmailInput';
import PasswordInput from '../passwordInput/PasswordInput';
import {useLazyGetUserQuery, useLoginMutation} from '../../model/slice/loginApi';
import ErrorMessage from '../../../../shared/ui/Error/ErrorMessage';
import formStyle from './formStyle.module.scss';
import {PreLoginResponse} from '../../model/types/loginSchema';

const LoginForm: React.FC = (): JSX.Element => {
  const {toggleLogged} = useLogged();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const toggleShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  const [login, {isLoading, isError}] = useLoginMutation();
  const [getUser] = useLazyGetUserQuery();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    try {
      e.preventDefault();
      const response: PreLoginResponse = await login({username: email, password}).unwrap();

      if (response.access_token) {
        dispatch(setToken(response.access_token));
        const userData = await getUser(response.access_token).unwrap();
        toggleLogged();
        dispatch(setUser({user: userData}));
        navigate('/');
      }
    } catch (error) {
      const errorMessage = error as LoginErrorMessage;
      dispatch(setError('Failed to obtain access token. Please try again.'));
      setLoginError(`${errorMessage.data?.message} Please try again.`);
    }
  };
  const handleEmailChange = (value: string): void => {
    setEmail(value);
    setEmailError('');
    setLoginError('');
  };

  const handlePasswordChange = (value: string): void => {
    setPassword(value);
    setPasswordError('');
    setLoginError('');
  };

  return (
    <div className={classNames(formStyle.form__wrapper)}>
      <form className={classNames(formStyle.form)} onSubmit={handleSubmit}>
        <EmailInput
          email={email}
          setEmail={handleEmailChange}
          emailError={emailError}
          setEmailError={setEmailError}
        />
        <PasswordInput
          label="Your Password:"
          password={password}
          setPassword={handlePasswordChange}
          passwordError={passwordError}
          setPasswordError={setPasswordError}
          showPassword={showPassword}
          toggleShowPassword={toggleShowPassword}
        />
        <Button disabled={!!emailError || !!passwordError || !email || !password}>
          {isLoading ? 'Loading...' : 'Login'}
        </Button>
        {isError ? <ErrorMessage message={loginError} /> : null}
      </form>
    </div>
  );
};
export default LoginForm;
