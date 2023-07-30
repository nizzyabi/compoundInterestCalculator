import React, { useState } from 'react';
import Layout from "./components/Layout"
import NumericInput from "./components/NumericInput"
import SliderInput from "./components/Sliderinput"
import CalculateButton from "./components/CalculateButton"
import CalculatedAmount from "./components/CalculatedAmounts"
import CalculatedAmounts from './components/CalculatedAmounts';

function App() {
  const [initAmount, setInitAmount] = useState('')
  const [monthlyContribution, setMonthlyContribution] = useState('')
  const [interestRate, setInterestRate] = useState('')
  const [numberOfYears, setNumberOfYears] = useState(0)
  const [finalValue, setFinalValue] = useState(null)

  function calculateCompoundInterest() {
    let total = parseInt(initAmount);
    let annualContribution = parseInt(monthlyContribution) * 12;
    for (let i = 0; i < parseInt(numberOfYears); i++) {
      total += annualContribution;
      total *= 1 + parseInt(interestRate) / 100;
    }
    setFinalValue(total)
  }

  function reset(){
    setInitAmount('')
    setMonthlyContribution('')
    setInterestRate('')
    setFinalValue(null)
    setNumberOfYears(0)
  }

  return (
    <Layout>
      {finalValue ? (
        <CalculatedAmounts finalValue={finalValue} numberOfYears={numberOfYears} monthlyContribution={monthlyContribution} reset={reset} initAmount={initAmount}/>
      ) : (
        <>
          <NumericInput title={'Starting Amount'} symbol={'$'} value={initAmount} setValue={setInitAmount}/>
          <NumericInput title={'Monthly Contribution'} symbol={'$'} value={monthlyContribution} setValue={setMonthlyContribution}/>
          <NumericInput title={'Input Interest Rate'} symbol={'%'} value={interestRate} setValue={setInterestRate}/>
          <SliderInput title={'# of Years'} value={numberOfYears} setValue={setNumberOfYears}/>
          <CalculateButton evaluate={calculateCompoundInterest} /></>
    )}
    </Layout>
  )
}

export default App
