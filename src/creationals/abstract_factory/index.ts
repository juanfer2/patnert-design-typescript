import GameboyItemFactory from './factories/gameboy_item_factory';
import NintendoItemFactory from './factories/nintento_item_factory';

export  const AbstractFactoryMain = () => {
  console.log('>>>>>>>>>>>>Abstract Factory<<<<<<<<<<<<<<<<');

  const gameboyItems = new GameboyItemFactory();
  const nesItems = new NintendoItemFactory();

  gameboyItems.createBlock();
  gameboyItems.createCoin();

  nesItems.createBlock();
  nesItems.createCoin();
  console.log('>>>>>>>>>>>>Abstract Factory<<<<<<<<<<<<<<<<');
};
