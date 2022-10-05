import { BattleState } from './battleStage';
import { Strategy } from './strategy';

export default class FireAttack implements Strategy{
  attack(battle: BattleState): BattleState {
    console.log('burn and fire');
    console.log('enemy foe');
    return battle;
  }
}
