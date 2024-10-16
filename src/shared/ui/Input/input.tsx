import React, {InputHTMLAttributes, memo, ForwardedRef, forwardRef} from 'react';
import classNames from 'classnames';
import cls from './input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  placeholder?: string;
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef?: ForwardedRef<HTMLInputElement>;
}

const Input = memo(
  forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {className, value, onChange, type = 'text', placeholder = '', inputRef} = props;

    const onChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>): void => {
      onChange?.(evt);
    };

    return (
      <div className={classNames(cls.InputWrapper, className)}>
        <input
          ref={inputRef || ref}
          className={cls.Input}
          type={type}
          value={value}
          onChange={onChangeHandler}
          placeholder={placeholder}
        />
      </div>
    );
  })
);

Input.displayName = 'Input';
export default Input;
