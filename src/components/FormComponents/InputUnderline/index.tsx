import {
  forwardRef,
  InputHTMLAttributes,
  ReactElement,
  LegacyRef,
} from 'react';
import cn from 'classnames';

import InputError from '../FieldError';
import styles from './InputUnderline.module.scss';

interface InputUnderlineProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  hasError?: boolean;
  isDisabled?: boolean;
  icon?: ReactElement;
  name?: string;
  placeholder?: string;
}

type InputRef = LegacyRef<HTMLInputElement> | undefined;

const Input = (
  {
    placeholder = '',
    error,
    hasError = false,
    isDisabled = false,
    name = '',
    ...props
  }: InputUnderlineProps,
  ref: InputRef,
) => (
  <div className={cn(styles.root, { [styles.error]: error })}>
    <div className={styles.wrap}>
      <input
        id={name}
        ref={ref}
        disabled={isDisabled}
        className={styles.input}
        placeholder={placeholder}
        {...props}
      />
      <span className={styles.underline} />
    </div>
    {hasError ? <InputError error={error} /> : null}
  </div>
);

export default forwardRef(Input);
