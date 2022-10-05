export enum KindCoin{
  'interrogant', 
  'solid', 
  'hidden'
}

export interface Coin {
  name: string;
  kind: KindCoin;
}
