<template>
  <button type="button" class="play-button" @click="onClick()">
    <span class="play-icon" v-show="active">
      <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
        <path stroke-width="0" d="M2 0 L7 0 L7 20 L2 20" fill="black"></path>
        <path stroke-width="0" d="M13 0 L18 0 L18 20 L13 20" fill="black"></path>
      </svg>
    </span>
    <span class="play-icon" v-show="!active">
      <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
        <path stroke-width="0" d="M2 2 L18 10 L2 18 L2 2" fill="black"></path>
      </svg>
    </span>
  </button>
</template>

<script>
export default {
  props: {
    active: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    onClick() {
      this.isPlaying = !this.isPlaying;
      this.$emit("click", this.isPlaying);
      if (this.isPlaying) {
        this.$emit("play");
      } else {
        this.$emit("pause");
      }
    }
  }
};
</script>

<style>
.play-button {
  background-color: blue;
  border: none;
  border-radius: 64px;
  height: 64px;
  width: 64px;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
}

.play-button:hover {
  transform: scale(1.1);
}
.play-button:focus,
.play-button:active {
  outline: none;
}
</style>

