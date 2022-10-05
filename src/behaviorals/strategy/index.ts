import { BattleState } from './battleStage';
import FireAttack from './fireAttack';
import WaterAttack from './waterAttack';

export const strategyMain = () => {
  const battleStage: BattleState = {stageName: 'initPhase'};
  const fireAttact = new FireAttack();
  const waterAttack = new WaterAttack();

  fireAttact.attack(battleStage);
  waterAttack.attack(battleStage);
};
