import iconDice from '../assets/images/icon-dice.svg';

export const AdviceButton = ({ onChangeAdvice, isLoading }) => {
  return (
    <>
      <button type="submit" className='change-advice' onClick={ () => onChangeAdvice() } disabled={ isLoading }>
        <img src={ iconDice } alt="Change Advice" />
      </button>
    </>
  )
}
