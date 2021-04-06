const name = 'Alejo';
const lastname = 'Boga';

// const nombreCompleto = nombre + ' ' + apellido;
const fullname = `${name} ${lastname}`;

console.log(fullname);

export function getGreeting(name = 'World') {
  return 'Hello ' + name;
}
