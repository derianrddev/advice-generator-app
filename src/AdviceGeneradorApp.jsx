import { AdviceButton } from './components/AdviceButton';
import { AdviceCard } from './components/AdviceCard';
import { useFetchAdvice } from './hooks/useFetchAdvice';

export const AdviceGeneradorApp = () => {

  const { advice, onChangeAdvice, isLoading } = useFetchAdvice();

  return (
    <>
      <AdviceCard { ...advice } />
      <AdviceButton onChangeAdvice={ onChangeAdvice } isLoading={ isLoading }/>
      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Derian Martín Rodríguez Durán</a>.
      </footer>
    </>
  )
}
