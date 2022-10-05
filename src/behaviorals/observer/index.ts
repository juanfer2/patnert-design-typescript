import Subscriber from './models/subscriber';
import YouTubeChannel from './models/youtube_channel';

export const ObserverMain = () => {
  console.log('>>>>>>>>>>>>Observer<<<<<<<<<<<<<<<<');
  const channel = new YouTubeChannel();
  const joe = new Subscriber('Jhoe', channel);
  const maria = new Subscriber('Maria', channel);

  channel.attach(joe);
  channel.attach(maria);
  channel.addNewVideo('Pattern desing Observer 👀');
  console.log('>>>>>>>>>>>>Observer<<<<<<<<<<<<<<<<');
};
