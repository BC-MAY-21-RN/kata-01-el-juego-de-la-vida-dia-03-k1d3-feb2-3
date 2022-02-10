export default class Celula {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.estado = 0; // 0 = muerto; 1 = vivo
    this.vecinos = this.buscarVecinos();
  }

  getPosX() {
    return this.posX;
  }
  getPosY() {
    return this.posY;
  }
  setEstado(estado) {
    this.estado = estado;
  }

  buscarVecinos() {
    let nTop = { x: this.getPosX() - 1, y: this.getPosY() };
    let nBot = { x: this.getPosX() + 1, y: this.getPosY() };
    let nLeft = { x: this.getPosX(), y: this.getPosY() - 1 };
    let nRight = { x: this.getPosX(), y: this.getPosY() + 1 };
    let nTopLeft = { x: this.getPosX() - 1, y: this.getPosY() - 1 };
    let nTopRight = { x: this.getPosX() - 1, y: this.getPosY() + 1 };
    let nBotLeft = { x: this.getPosX() + 1, y: this.getPosY() - 1 };
    let nBotRight = { x: this.getPosX() + 1, y: this.getPosY() + 1 };

    let vecinos = {
      nTop,
      nBot,
      nLeft,
      nRight,
      nTopLeft,
      nTopRight,
      nBotLeft,
      nBotRight,
    };
    return vecinos;
  }
}
const celular = new Celula(1, 1);
console.log(celular.vecinos.nTop.x);

/*0.0 0.1 0.2
  1.0 1.1 1.2
  2.0 2.1 2.2*/
