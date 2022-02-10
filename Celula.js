export default class Celula {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.estado = 0; // 0 = muerto; 1 = vivo
  }

  getPostX() {
    return this.posX;
  }
  getPostY() {
    return this.posY;
  }
  setEstado(estado) {
    this.estado = estado;
  }
}

const celula = new Celula(2, 5);
