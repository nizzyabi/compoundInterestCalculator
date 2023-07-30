import React from 'react';

export default function CalculatedAmounts(props) {
  const { finalValue, reset, monthlyContribution, numberOfYears, initAmount } = props;
  if (!finalValue) {
    return null;
  }

  const formattedNumber = (number) => {
    return new Intl.NumberFormat().format(number);
  };

  const amounts = {
    'Compunded Amount': finalValue,
    'Ordinary Amount': parseInt(numberOfYears) * parseInt(monthlyContribution) * 12 + parseInt(initAmount),
    'Difference': finalValue - (parseInt(numberOfYears) * parseInt(monthlyContribution) * 12 + parseInt(initAmount)),
  };

  return (
    <div className='bg-blue-400 rounded text-white flex flex-col gap-6 p-4 flex-1'>
      {Object.keys(amounts).map((amount, amountIndex) => {
        return (
          <div key={amountIndex} className='flex items-center gap-2'>
            <h2 className='text-lg font-semibold sm:text-xl md:text-2xl '>{amount}</h2>
            <p>${formattedNumber(amounts[amount].toFixed(2))}</p>
          </div>
        );
      })}
      <button className='px-4 py-2 text-center border-2 border-solid border-white font-bold text-white rounded' onClick={reset}>
        Reset
      </button>
    </div>
  );
}

