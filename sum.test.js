//const sum = require('./sum');
const celula = require('./Celula.js');
//const fillTablero = require('./Tablero');
//import fillTablero from './Tablero';

/*test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});*/

// describe('tests Tablero Class methods', function () {
//   it('method fillTablero', () => {
//     expect(fillTablero.length).toBe(4);
//   });
// });

test('celula test', () => {
  expect(celula).toBeInstanceOf(Celula);
});
