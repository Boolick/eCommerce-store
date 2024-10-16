import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import classNames from 'classnames';
import Button from 'shared/ui/ButtonSubmit/Button';
import {AppRoutes, RoutePath} from 'app/providers/AppRouter/config/routeConfig';
import {useLogged} from 'app/providers/LoggedProvider';
import {setToken, setUser, setError} from 'entities/Customer/model/slice/userSlice';
import {SignUpResponse} from '../model/types/SignUpSchema';
import EmailInput from './EmailInput';
import NameInput from './NameInput';
import SurnameInput from './SurnameInput';
import PasswordInput from './PasswordInput';
import {useSignUpMutation} from '../model/slices/signUpApi';
import ErrorMessage from '../../../shared/ui/Error/ErrorMessage';
import {validateEmail} from '../model/services/emailValidation';
import {validateName} from '../model/services/nameValidation';
import {validatePassword} from '../model/services/passwordValidation';
import formStyle from './formStyle.module.scss';

const RegistrationForm: React.FC = (): JSX.Element => {
  const {toggleLogged} = useLogged();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signUp, {isLoading, isError}] = useSignUpMutation();

  const [email, setEmail] = useState('');
  const [firstName, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [surnameError, setSurnameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [signUpError, setSignUpError] = useState('');

  const validateForm = (): boolean => {
    setEmailError(validateEmail(email));
    setNameError(validateName(firstName));
    setSurnameError(validateName(surname));
    setPasswordError(validatePassword(password));

    const isValid = !emailError && !nameError && !surnameError && !passwordError;
    return isValid;
  };

  const toggleShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response: SignUpResponse = await signUp({
          email,
          firstName,
          lastName: surname,
          password,
        }).unwrap();
        const userData = {
          id: response.customer.id,
          version: response.customer.version,
          versionModifiedAt: response.customer.versionModifiedAt,
          lastMessageSequenceNumber: response.customer.lastMessageSequenceNumber,
          createdAt: response.customer.createdAt,
          lastModifiedAt: response.customer.lastModifiedAt,
          lastModifiedBy: response.customer.lastModifiedBy,
          createdBy: response.customer.createdBy,
          email: response.customer.email,
          firstName: response.customer.firstName,
          lastName: response.customer.lastName,
          password: response.customer.password,
          addresses: response.customer.addresses,
          shippingAddressIds: response.customer.shippingAddressIds,
          billingAddressIds: response.customer.billingAddressIds,
          isEmailVerified: response.customer.isEmailVerified,
          key: null,
          stores: response.customer.stores,
          authenticationMode: response.customer.authenticationMode,
        };
        dispatch(setUser({user: userData}));
        const token = localStorage.getItem('token');
        toggleLogged();
        dispatch(setToken(token));
        navigate(RoutePath[AppRoutes.MAIN]);
      } catch (error) {
        setError('Registration failed. Please try again.');
      }
    }
  };

  const handleEmailChange = (value: string): void => {
    setEmail(value);
    setEmailError('');
    setSignUpError('');
  };

  const handleNameChange = (value: string): void => {
    setName(value);
    setNameError('');
    setSignUpError('');
  };

  const handleSurnameChange = (value: string): void => {
    setSurname(value);
    setSurnameError('');
    setSignUpError('');
  };

  const handlePasswordChange = (value: string): void => {
    setPassword(value);
    setPasswordError('');
    setSignUpError('');
  };

  return (
    <div className={classNames(formStyle.form__wrapper)}>
      <form className={classNames(formStyle.form)} onSubmit={handleSubmit}>
        <NameInput
          firstName={firstName}
          setName={handleNameChange}
          nameError={nameError}
          setNameError={setNameError}
        />
        <SurnameInput
          surname={surname}
          setSurname={handleSurnameChange}
          surnameError={surnameError}
          setSurnameError={setSurnameError}
        />
        <EmailInput
          email={email}
          setEmail={handleEmailChange}
          emailError={emailError}
          setEmailError={setEmailError}
        />
        <PasswordInput
          password={password}
          setPassword={handlePasswordChange}
          passwordError={passwordError}
          setPasswordError={setPasswordError}
          showPassword={showPassword}
          toggleShowPassword={toggleShowPassword}
        />
        <Button
          disabled={
            !!emailError ||
            !!nameError ||
            !!surnameError ||
            !!passwordError ||
            !email ||
            !firstName ||
            !surname ||
            !password
          }
        >
          {isLoading ? 'Registering...' : 'Register'}
        </Button>
        {isError && <ErrorMessage message={signUpError} />}
      </form>
    </div>
  );
};

export default RegistrationForm;
