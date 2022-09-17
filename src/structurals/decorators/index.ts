import ArmourDecorator from './armourDecorator';
import BaseEnemy from './baseEnemy';
import HelmetDecorator from './helmetDecorator';

export const DecoratorPatnertMain = () => {
  const enemy = new BaseEnemy();
  const enemyWithHelmet = new HelmetDecorator(enemy);
  const enemyWithHelmetAndArmour = new ArmourDecorator(enemyWithHelmet);
  const computedDamage = enemyWithHelmetAndArmour.takeDamage();

  console.log('computedDamage');
  console.log(computedDamage);
};
