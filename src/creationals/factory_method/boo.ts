import { Enemy } from './enemy';

export default class Boo implements Enemy{
  name: string;

  constructor(name: string) {
    this.name = `👻 ${name}-boo 👻`;
  }
}
