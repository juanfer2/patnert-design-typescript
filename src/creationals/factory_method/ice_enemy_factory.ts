import { Enemy } from './enemy';
import { EnemyFactory } from './enemy_factory';
import Koopa from './koopa';

export default class IceEnemyFactory implements EnemyFactory {
  public createEnemy(): Enemy {
   const enemy = new Koopa('blue');

   return enemy;
  }
}
