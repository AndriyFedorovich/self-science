import React, { memo } from 'react';
import cn from 'classnames';
import styles from './FieldLabel.module.scss';

interface FieldLabelProps {
  name?: string;
  text: string;
  className?: string;
}

const FieldLabel = ({ name, className, text }: FieldLabelProps) => (
  <label className={cn(styles.root, className)} htmlFor={name}>
    {text}
  </label>
);

export default memo(FieldLabel);
