import { useEffect, useState } from 'react';
import { getAdvice } from '../helpers/getAdvice';

export const useFetchAdvice = () => {

  const [advice, setAdvice] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const onChangeAdvice = async() => {
    setIsLoading(true);
    const newAdvice = await getAdvice();
    setAdvice(newAdvice);
    setIsLoading(false);
  }

  useEffect(() => {
    onChangeAdvice();
  }, []);

  return {
    advice,
    onChangeAdvice,
    isLoading
  }
}
