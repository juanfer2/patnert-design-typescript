import { EnemyFactory } from './enemy_factory';

export default class Game {
  private enemyFactory: EnemyFactory;

  constructor(enemyFactory: EnemyFactory) {
    this.enemyFactory = enemyFactory;
  }

  startGame() {
    console.log('Starting game');
    const enemy = this.enemyFactory.createEnemy();
    console.log(`${enemy.name} has been created`);
  }
}
