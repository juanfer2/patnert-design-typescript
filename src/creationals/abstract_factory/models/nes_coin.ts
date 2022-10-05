import { Coin, KindCoin } from '../types/coin';

export default class NesCoin implements Coin {
  name: string;
  kind: KindCoin;

  constructor(kind: KindCoin) {
    this.name = 'Nes Coin';
    this.kind = kind;
  }
}
