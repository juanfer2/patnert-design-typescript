import { BattleState } from './battleStage';

export interface Strategy {
  attack(battle: BattleState): BattleState;
}
