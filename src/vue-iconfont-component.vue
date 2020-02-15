<template>
  <svg class="icon" :style="styles" aria-hidden="true" @click="handleClick">
    <use :xlink:href="iconType"></use>
  </svg>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ""
    },
    size: [Number, String],
    color: String
  },
  computed: {
    iconType() {
      return `#${this.type}`;
    },
    styles() {
      let style = {};

      if (this.size) {
        style.fontSize = this.size;
      }

      if (this.color) {
        style.color = this.color;
      }

      return style;
    }
  },
  methods: {
    handleClick(event) {
      this.$emit("on-click", event);
    }
  }
};
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
