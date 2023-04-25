import React, {
  useCallback,
  useEffect,
  useState,
  ChangeEvent,
  ReactNode,
} from 'react';
import InputUnderline from 'components/FormComponents/InputUnderline';
import styles from './Equations.module.scss';

import {
  generateEquationSetTypeVerbalCount,
  EquationType,
} from './utils/equations.util';
import ButtonPrimary from 'components/Buttons/ButtonPrimary';

interface EquationsProps {
  onFinish: () => void;
  children: ReactNode;
}

const Equations = ({ onFinish, children }: EquationsProps) => {
  const [value, setValue] = useState('');
  const [step, setStep] = useState(0);
  const [equationSets, setEquationSets] = useState<EquationType[]>([]);

  useEffect(() => {
    setEquationSets(generateEquationSetTypeVerbalCount());
  }, []);

  const handleCheck = () => {
    if (equationSets[step].result !== +value) {
      return;
    }

    if (step === equationSets.length) {
      onFinish();
      return;
    }

    setStep(prev => prev + 1);
    setValue('');
  };

  const handleChangeValue = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    [],
  );

  if (!equationSets.length) {
    return null;
  }

  return (
    <div className={styles.root}>
      <div className={styles.row}>
        <div className={styles.equations}>{equationSets[step].equation}=</div>
        <div className={styles.input}>
          <InputUnderline
            value={value}
            onChange={handleChangeValue}
            name={`equation${step}`}
          />
        </div>
      </div>
      <div className={styles.button}>
        <ButtonPrimary text="Check" onClick={handleCheck} />
      </div>
      <div className={styles.timer}>{children}</div>
    </div>
  );
};

export default Equations;
