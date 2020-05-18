const player = require('node-wav-player');
const schedule = require("node-schedule");

const playSound = (path) => {
  return new Promise((resolve, reject) => {
    player.play({path: path}).then(() => {
      resolve();
    }).catch((error) => {
      console.error(error);
      reject(error);
    });
  });
}

schedule.scheduleJob({
  hour   : 10,
  minute:  30
}, function () {
  playSound('./sounds/bell.mp3');
  console.log('朝礼開始')
});

schedule.scheduleJob({
  hour   : 10,
  minute:  45
}, function () {
  playSound('./sounds/bell.mp3');
  console.log('1限開始')
});

schedule.scheduleJob({
  hour   : 11,
  minute:  35
}, function () {
  playSound('./sounds/bell.mp3');
  console.log('1限終了')
});

schedule.scheduleJob({
  hour   : 11,
  minute:  45
}, function () {
  playSound('./sounds/bell.mp3');
  console.log('2限開始')
});

schedule.scheduleJob({
  hour   : 12,
  minute:  35
}, function () {
  playSound('./sounds/bell.mp3');
  console.log('2限終了')
});

schedule.scheduleJob({
  hour   : 13,
  minute:  15
}, function () {
  playSound('./sounds/bell.mp3');
  console.log('3限開始')
});

schedule.scheduleJob({
  hour   : 14,
  minute:  05
}, function () {
  playSound('./sounds/bell.mp3');
  console.log('3限終了')
});

schedule.scheduleJob({
  hour   : 14,
  minute:  15
}, function () {
  playSound('./sounds/bell.mp3');
  console.log('4限開始')
});

schedule.scheduleJob({
  hour   : 15,
  minute:  05
}, function () {
  playSound('./sounds/bell.mp3');
  console.log('4限終了')
});

schedule.scheduleJob({
  hour   : 15,
  minute:  15
}, function () {
  playSound('./sounds/bell.mp3');
  console.log('5限開始')
});

schedule.scheduleJob({
  hour   : 16,
  minute:  05
}, function () {
  playSound('./sounds/bell.mp3');
  console.log('5限終了')
});

schedule.scheduleJob({
  hour   : 16,
  minute:  15
}, function () {
  playSound('./sounds/bell.mp3');
  console.log('6限開始')
});

schedule.scheduleJob({
  hour   : 17,
  minute:  05
}, function () {
  playSound('./sounds/bell.mp3');
  console.log('6限終了')
});

schedule.scheduleJob({
  hour   : 17,
  minute:  30
}, function () {
  playSound('./sounds/bell.mp3');
  console.log('放課後終了')
});