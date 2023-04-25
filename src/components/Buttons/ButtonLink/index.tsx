import React, { memo, ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './ButtonLink.module.scss';

export interface ButtonLinkProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  isDisabled?: boolean;
}

const ButtonLink = ({
  children,
  isDisabled = false,
  ...props
}: ButtonLinkProps) => (
  <button disabled={isDisabled} className={styles.root} {...props}>
    {children}
  </button>
);

export default memo(ButtonLink);
