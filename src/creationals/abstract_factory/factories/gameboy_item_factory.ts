import GameBoyBlock from '../models/gameboy_block';
import GameBoyCoin from '../models/gameboy_coin';
import { AbstractFactoryBuilder } from '../types/abstract_factory';
import { Block } from '../types/block';
import { Coin, KindCoin } from '../types/coin';

export default class GameboyItemFactory implements AbstractFactoryBuilder {
  createCoin(): Coin {
    const coin = new GameBoyCoin(KindCoin.solid);
    console.log(`🎮 create gameboy item ${coin.name} of kind ${KindCoin[coin.kind]} 🎮`);

    return coin;
  }
  createBlock(): Block {
    const block = new GameBoyBlock();
    console.log(`🎮 create gameboy item ${block.name} 🎮`);

    return block;
  }

}
