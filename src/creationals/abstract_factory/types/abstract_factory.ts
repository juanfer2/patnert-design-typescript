import { Block } from './block';
import { Coin } from './coin';

export interface AbstractFactoryBuilder {
  createCoin(): Coin,
  createBlock(): Block 
}
