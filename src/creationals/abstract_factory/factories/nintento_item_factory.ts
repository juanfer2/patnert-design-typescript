import NesBlock from '../models/nes_block';
import NesCoin from '../models/nes_coin';
import { AbstractFactoryBuilder } from '../types/abstract_factory';
import { Block } from '../types/block';
import { Coin, KindCoin } from '../types/coin';

export default class NintentoItemFactory implements AbstractFactoryBuilder {
  createCoin(): Coin {
    const coin = new NesCoin(KindCoin.solid);
    console.log(`🎮 create nintendo item ${coin.name} of kind ${KindCoin[coin.kind]} 🎮`);

    return coin;
  }
  createBlock(): Block {
    const block = new NesBlock();
    console.log(`🎮 create nintendo item ${block.name} 🎮`);

    return block;
  }

}
