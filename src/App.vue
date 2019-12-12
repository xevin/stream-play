<template>
  <div id="app">
    <h2 class="is-center">TRANCE STREAMING</h2>

    <div class="interface is-center">
      <PlayButton :active="isPlaying" @click="togglePlay()"/>

      <div class="channel-select columns">
        <div v-for="(url,name) in streams" :key="url" class="column">
          <input
            :id="`select-${name}`"
            type="radio"
            name="station"
            @click="pause()"
            v-model="currentStation"
            :value="name"
          >
          <label :for="`select-${name}`">{{ name.toUpperCase() }}</label>
        </div>
      </div>

      <div class="channel-select columns"></div>
    </div>
  </div>
</template>

<script>
import { Howl } from "howler";
import PlayButton from "./components/PlayButton";
import { streams, getInfo } from "./api";

export default {
  name: "App",
  components: {
    PlayButton
  },
  data: () => ({
    isPlaying: false,
    currentStation: "psy",
    stream: null,
    streams
  }),
  mounted() {
    this.stream = new Howl({
      src: streams[this.currentStation],
      format: "mp3"
    });
  },
  computed: {
    streamUrls() {
      const self = this;
      return Object.keys(this.streams).map(el => self.streams[el]);
    },
    streamNames() {
      return Object.keys(this.streams);
    }
  },
  methods: {
    pause() {
      this.isPlaying = false;
      this.stream.pause();
    },
    play() {
      this.isPlaying = true;

      this.stream = new Howl({
        src: streams[this.currentStation],
        format: "mp3"
      });

      this.stream.play();
    },
    togglePlay() {
      if (this.isPlaying) {
        this.pause();
      } else {
        this.play();
      }
    },
    getData(channelName) {
      getInfo(channelName)
        .then(res => res.json())
        .then(data => {
          this[channelName] = data;
        });
    }
  }
};
</script>

<style>
#app {
  font-family: sans-serif;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
}

.is-center {
  text-align: center;
}

.columns {
  display: flex;
  flex-direction: row;
}

@media screen and (max-width: 480px) {
  .columns {
    flex-direction: column;
  }
  .interface .column {
    width: inherit !important;
    margin-left: auto;
    margin-right: auto;
  }
}

.interface {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.interface .column {
  width: 25%;
  margin: 0.5em;
}

.channel-select {
  margin-top: 2rem;
}

.channel-select input {
  margin: 0 2rem;
  display: none;
}

.channel-select label {
  cursor: pointer;
  line-height: 2rem;
  font-size: 1.2rem;
  user-select: none;
  transition: all 0.15s ease-in-out;
  color: #808080;
}

.channel-select label:hover {
  color: #000;
}

.channel-select input[type="radio"]:checked + label {
  color: #000;
  border-bottom: 1px solid;
}

.play-icon {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  height: 32px;
  width: 32px;
}
</style>
