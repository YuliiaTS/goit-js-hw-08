import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

const onPlay = function (data) {
  const currentTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
};

player.on('timeupdate', throttle(onPlay, 1000));

function populateVideo() {
  const savedTime = localStorage.setItem('videoplayer-current-time');
  if (savedTime) {
    player.setCurrentTime(savedTime);
  }
  populateVideo();
}
