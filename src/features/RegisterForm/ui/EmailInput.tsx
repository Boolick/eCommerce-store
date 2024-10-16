import React, {useState, useRef, useEffect} from 'react';
import Input from 'shared/ui/Input/input';
import {validateEmail} from '../model/services/emailValidation';
import styles from './EmailInput.module.scss';

interface EmailInputProps {
  email: string;
  setEmail: (email: string) => void;
  emailError: string;
  setEmailError: (error: string) => void;
}

const EmailInput: React.FC<EmailInputProps> = ({email, setEmail, emailError, setEmailError}) => {
  const [dirty, setDirty] = useState(false);

  const emailInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, []);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
    setDirty(true);
    setEmailError(validateEmail(e.target.value));
  };

  return (
    <div>
      <label htmlFor="email">
        Email:
        {dirty && (
          <span className={emailError ? styles.error : styles.success}>
            {emailError || ' Valid email address.'}
          </span>
        )}
      </label>
      <Input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
        onBlur={() => setDirty(true)}
        required
        placeholder={`Enter your email`}
        inputRef={emailInputRef}
      />
    </div>
  );
};

export default EmailInput;
