export const streams = {
  alt: "http://streamer.psyradio.org:8040/;listen.mp3",
  psy: "http://streamer.psyradio.org:8030/;listen.mp3",
  chill: "http://streamer.psyradio.org:8020/;listen.mp3",
  prog: "http://streamer.psyradio.org:8010/;listen.mp3",
  space: "http://ice1.somafm.com/spacestation-128-mp3"
};

export function getInfo(channelName) {
  return fetch("http://html.psyradio.fm/songData.php?ajax=1", {
    // credentials: "omit",
    // headers: {
    //   accept: "*/*",
    //   "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,ja;q=0.6",
    //   "cache-control": "no-cache",
    //   "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    //   pragma: "no-cache",
    //   "x-requested-with": "XMLHttpRequest"
    // },
    // referrer: "http://html.psyradio.fm/",
    // referrerPolicy: "no-referrer-when-downgrade",
    body: `channel=${channelName}`,
    method: "POST"
    // mode: "cors"
  });
}
