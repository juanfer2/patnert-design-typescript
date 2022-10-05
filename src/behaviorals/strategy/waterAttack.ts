import { BattleState } from './battleStage';
import { Strategy } from './strategy';

export default class WaterAttack implements Strategy{
  attack(battle: BattleState): BattleState {
    console.log('damp and wet');
    console.log('unconfortable foe');
    return battle;
  }
}
