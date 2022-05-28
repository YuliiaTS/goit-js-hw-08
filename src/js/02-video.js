import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

const VIDEOPLAYER_CURRENT_TIME = 'videoplayer-current-time';

const onPlay = function (data) {
  const currentTime = data.seconds;
  localStorage.setItem(VIDEOPLAYER_CURRENT_TIME, currentTime);
};

player.on('timeupdate', throttle(onPlay, 1000));

function populateVideo() {
  const savedTime = localStorage.getItem(VIDEOPLAYER_CURRENT_TIME);
  if (savedTime) {
    player.setCurrentTime(savedTime);
  }
}
populateVideo();
