import { getNumberFromInterval } from '../helpers/equations.helper';

const generateEquationTypeVerbalCount = () => {
  const equationItemCount = getNumberFromInterval(3, 4);
  const equationKeys = Array.from(Array(equationItemCount).keys());
  const { equationItems, result } = equationKeys.reduce(
    (accumulator, current, index) => {
      let equationItem = 0;

      const maxNumberInterval =
        accumulator.equationItems.findIndex(equationItem => equationItem > 10) >
        -1
          ? 9
          : 20;

      if (index === 0) {
        equationItem = getNumberFromInterval(1, maxNumberInterval);
      } else {
        const symbol = getNumberFromInterval(0, 2) ? '+' : '-';
        equationItem = +`${symbol}${getNumberFromInterval(
          1,
          maxNumberInterval,
        )}`;
      }

      accumulator.result = accumulator.result + equationItem;
      accumulator.equationItems.push(equationItem);

      return accumulator;
    },
    {
      result: 0,
      equationItems: [] as number[],
    },
  );

  const stringifiedEquationItems = JSON.stringify(equationItems);
  const equation = stringifiedEquationItems
    .substring(1, stringifiedEquationItems.length - 1)
    .replace(/,-/g, '-')
    .replace(/,/g, '+');

  return {
    equationItems,
    result,
    equation,
  };
};

export type EquationType = {
  equationItems: number[];
  result: number;
  equation: string;
};

export const generateEquationSetTypeVerbalCount = () => {
  const equations = [];

  for (let index = 0; index < 10; index++) {
    const equation = { ...generateEquationTypeVerbalCount() };
    equations.push(equation);
  }

  return equations;
};
