import React, { memo, ButtonHTMLAttributes } from 'react';
import styles from './ButtonClose.module.scss';

export interface ButtonCloseProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isDisabled?: boolean;
}

const ButtonClose = ({ isDisabled = false, ...props }: ButtonCloseProps) => (
  <button disabled={isDisabled} className={styles.root} {...props}></button>
);

export default memo(ButtonClose);
