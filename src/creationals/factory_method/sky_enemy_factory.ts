import Boo from './boo';
import { Enemy } from './enemy';
import { EnemyFactory } from './enemy_factory';

export default class SkyEnemyFactory implements EnemyFactory {
  public createEnemy(): Enemy {
  const enemy = new Boo('King');

   return enemy;
  }
}
