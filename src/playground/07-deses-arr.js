const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [, , p3] = personajes;

export const returnArray = () => {
  return ['ABC', 123];
};

const [letras, numeros] = returnArray();

const usState = valor => {
  return [
    valor,
    () => {
      console.log('Hola Mundo');
    }
  ];
};
