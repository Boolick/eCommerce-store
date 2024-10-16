import React, {useState, useRef, useEffect} from 'react';
import Input from 'shared/ui/Input/input';
import {validateName} from '../model/services/nameValidation';
import styles from './NameInput.module.scss';

interface SurnameInputProps {
  surname: string;
  setSurname: (name: string) => void;
  surnameError: string;
  setSurnameError: (error: string) => void;
}

export const SurnameInput: React.FC<SurnameInputProps> = ({
  surname,
  setSurname,
  surnameError,
  setSurnameError,
}) => {
  const [dirty, setDirty] = useState(false);

  const surnameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (surnameInputRef.current) {
      surnameInputRef.current.focus();
    }
  }, []);
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSurname(e.target.value);
    setDirty(true);
    setSurnameError(validateName(e.target.value));
  };

  return (
    <div>
      <label htmlFor="text">
        Surname:
        {dirty && (
          <span className={surnameError ? styles.error : styles.success}>
            {surnameError || ' Valid surname.'}
          </span>
        )}
      </label>
      <Input
        type="text"
        id="surname"
        value={surname}
        onChange={handleNameChange}
        onBlur={() => setDirty(true)}
        required
        placeholder={`Enter your surname`}
        inputRef={surnameInputRef}
      />
    </div>
  );
};

export default SurnameInput;
