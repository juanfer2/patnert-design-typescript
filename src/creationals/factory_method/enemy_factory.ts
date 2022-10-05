import { Enemy } from './enemy';

export interface EnemyFactory {
  createEnemy(): Enemy;
}
