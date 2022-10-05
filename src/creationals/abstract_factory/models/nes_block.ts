import { Block } from '../types/block';

export default class NesBlock implements Block {
  name: string;

  constructor() {
    this.name = 'Nes Block';
  }
}
