import React, {useState, useRef, useEffect} from 'react';
import Input from 'shared/ui/Input/input';
import styles from './NameInput.module.scss';
import {validateName} from '../model/services/nameValidation';

interface NameInputProps {
  firstName: string;
  setName: (name: string) => void;
  nameError: string;
  setNameError: (error: string) => void;
}

export const NameInput: React.FC<NameInputProps> = ({
  firstName,
  setName,
  nameError,
  setNameError,
}) => {
  const [dirty, setDirty] = useState(false);

  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
    setDirty(true);
    setNameError(validateName(e.target.value));
  };

  return (
    <div>
      <label htmlFor="text">
        Name:
        {dirty && (
          <span className={nameError ? styles.error : styles.success}>
            {nameError || ' Valid name.'}
          </span>
        )}
      </label>
      <Input
        type="text"
        id="name"
        value={firstName}
        onChange={handleNameChange}
        onBlur={() => setDirty(true)}
        required
        placeholder={`Enter your name`}
        inputRef={nameInputRef}
      />
    </div>
  );
};

export default NameInput;
