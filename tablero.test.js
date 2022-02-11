const Tablero = require('./Tablero');

describe('Tablero', () => {
  const tablero = new Tablero(4, 8);

  test('get matriz', () => {
    expect(tablero.matriz).not.toBeNull();
  });

  test('matriz alto', () => {
    expect(tablero.alto).toBe(8);
  });

  test('matriz ancho', () => {
    expect(tablero.ancho).toBe(4);
  });
});
