import patternDividerD from '../assets/images/pattern-divider-desktop.svg';
import patternDividerM from '../assets/images/pattern-divider-mobile.svg';

export const AdviceCard = ({ id, advice }) => {
  return (
    <>
      <main className='advice-card'>
        <h1 className="advice-title"><span>Advice</span> #{ id }</h1>
        <p className='advice-body'>"{ advice }"</p>
        <picture>
          <source media="(min-width: 450px)" srcSet={ patternDividerD } />
          <img className='advice-divider' src={ patternDividerM } alt="" />
        </picture>
      </main>
    </>
  )
}
