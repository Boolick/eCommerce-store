import React, {useState} from 'react';
import Input from 'shared/ui/Input/input';
import Button from 'shared/ui/ButtonSubmit/Button';
import {validatePassword} from '../model/services/passwordValidation';
import styles from './PasswordInput.module.scss';

interface PasswordInputProps {
  password: string;
  setPassword: (password: string) => void;
  passwordError: string;
  setPasswordError: (error: string) => void;
  showPassword: boolean;
  toggleShowPassword: () => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  password,
  setPassword,
  passwordError,
  setPasswordError,
  showPassword,
  toggleShowPassword,
}) => {
  const [dirty, setDirty] = useState(false);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
    setDirty(true);
    setPasswordError(validatePassword(e.target.value));
  };

  return (
    <div>
      <label htmlFor="password">
        Password:
        {dirty && (
          <span className={passwordError ? styles.error : styles.success}>
            {passwordError || ' Valid password.'}
          </span>
        )}
      </label>
      <Input
        type={showPassword ? 'text' : 'password'}
        id="password"
        value={password}
        onChange={handlePasswordChange}
        onBlur={() => setDirty(true)}
        required
        placeholder="Enter your password"
      />
      <Button type="button" onClick={toggleShowPassword}>
        {showPassword ? 'Hide Password' : 'Show Password'}
      </Button>
    </div>
  );
};

export default PasswordInput;
