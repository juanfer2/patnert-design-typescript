import EnemyDecorator from './enemyDecorator';

export default class HelmetDecorator extends EnemyDecorator{
  takeDamage(): number {
    return this.enemy.takeDamage() / 2;
  }
}
