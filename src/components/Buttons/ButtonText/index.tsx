import React, { memo, ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './ButtonText.module.scss';

export interface ButtonTextProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  isDisabled?: boolean;
}

const ButtonText = ({
  children,
  isDisabled = false,
  ...props
}: ButtonTextProps) => (
  <button disabled={isDisabled} className={styles.root} {...props}>
    {children}
  </button>
);

export default memo(ButtonText);
