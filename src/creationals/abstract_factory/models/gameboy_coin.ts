import { Coin, KindCoin } from '../types/coin';

export default class GameBoyCoin implements Coin {
  name: string;
  kind: KindCoin;

  constructor(kind: KindCoin) {
    this.name = 'Game Boy Coin';
    this.kind = kind;
  }
}
