import { Block } from '../types/block';

export default class GameBoyBlock implements Block {
  name: string;

  constructor() {
    this.name = 'Game Boy Block';
  }
}
