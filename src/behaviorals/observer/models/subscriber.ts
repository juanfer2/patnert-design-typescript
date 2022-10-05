import { Observable } from '../types/observable';
import { Observer } from '../types/observer';

export default class Subscriber implements Observer {
  private observable: Observable;
  public name: string;

  constructor(name: string, observable: Observable) {
    this.name = name;
    this.observable = observable;
  }

  update(): void {
    console.log(`😊 Hi ${this.name} thanks for suscribe 😊`);
    console.log(`We have a new video 🎥 ${this.observable.getLastVideoPoster()} 🎥 `);
  }  
}
