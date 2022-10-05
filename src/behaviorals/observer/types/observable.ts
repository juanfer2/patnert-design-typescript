import { Observer } from './observer';

export interface Observable {
  getLastVideoPoster(): string;
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}
