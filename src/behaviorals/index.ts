import { ObserverMain } from './observer';
import { strategyMain } from './strategy';

export const BehavioralsMain = () => {
  console.log('->->->->->> Behaviorals<<-<-<<-<--<-<-<-');
  strategyMain();
  ObserverMain();
  console.log('->->->->->> Behaviorals<<-<-<<-<--<-<-<-');
};
