import { useFetchAdvice } from '../hooks/useFetchAdvice';
import { AdviceButton } from './AdviceButton';
import patternDividerD from '../assets/images/pattern-divider-desktop.svg';
import patternDividerM from '../assets/images/pattern-divider-mobile.svg';

export const AdviceCard = () => {

  const { advice:info, onChangeAdvice, isLoading } = useFetchAdvice();
  const { id, advice } = info;

  return (
    <>
      <main className='advice-card'>
        <div className="advice-container">
          <h1 className="advice-title"><span>Advice</span> #{ id }</h1>
          <p className='advice-body'>"{ advice }"</p>
          <picture>
            <source media="(min-width: 450px)" srcSet={ patternDividerD } />
            <img className='advice-divider' src={ patternDividerM } alt="" />
          </picture>
        </div>
        <div className='button-container'>
          <AdviceButton onChangeAdvice={ onChangeAdvice } isLoading={ isLoading }/>
        </div>
      </main>
    </>
  )
}
