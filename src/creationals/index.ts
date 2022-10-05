import { AbstractFactoryMain } from './abstract_factory';
import { FactoryMain } from './factory_method';

export const CreationalsMain = () =>  {
  console.log('Creationals Partnert');
  FactoryMain();
  AbstractFactoryMain();
  console.log('Creationals Partnert');
};
