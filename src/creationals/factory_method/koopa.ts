import { Enemy } from './enemy';

export default class Koopa implements Enemy{
  name: string;

  constructor(name: string) {
    this.name = `🐢 ${name}-koopa 🐢`;
  }
}
