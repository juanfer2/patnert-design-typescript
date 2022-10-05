import Game from './game';
import IceEnemyFactory from './ice_enemy_factory';
import SkyEnemyFactory from './sky_enemy_factory';

export const FactoryMain = () => {
  console.log('FactoryMain********************************');
  const iceEnemyFactory = new IceEnemyFactory();
  const skyEnemyFactory = new SkyEnemyFactory();
  const gameIce = new Game(iceEnemyFactory);
  const gameSky = new Game(skyEnemyFactory);
  gameIce.startGame();
  gameSky.startGame();
  console.log('FactoryMain********************************');
};
