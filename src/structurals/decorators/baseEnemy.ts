import { Enemy } from './enemy.type';

export default class BaseEnemy implements Enemy {
  takeDamage(): number {
    return 10;
  }
}
