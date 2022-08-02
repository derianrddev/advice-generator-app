
export const getAdvice = async() => {

  const url = 'https://api.adviceslip.com/advice';
  const resp = await fetch( url );
  const { slip:advice } = await resp.json();

  return advice;

}