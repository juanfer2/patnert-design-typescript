import { Observable } from '../types/observable';
import { Observer } from '../types/observer';

export default class YouTubeChannel implements Observable {
  private channelSubscriber: Observer[] = [];
  private lastVideoPoster = '';

  attach(observer: Observer): void {
    this.channelSubscriber.push(observer);
  }

  detach(observer: Observer): void {
    console.log('detach', observer);
  }

  notify(): void {
    for (const suscriptor of this.channelSubscriber) {
      suscriptor.update();
      console.log(`${suscriptor.name} Suscriptor was updated`);
    }
  }

  getLastVideoPoster(): string {
    return this.lastVideoPoster;
  }

  addNewVideo(title: string) {
    console.log(`Adding new video ->${title}<- to Channel`);
    this.lastVideoPoster = title;
    this.notify();
  }
}
