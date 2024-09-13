<template>
  <svg
    aria-hidden="true"
    :class="[
      'pointer-events-none fixed inset-0 w-full h-full fill-primary/30 stroke-gray-400/30 z-[-1]',
      className,
    ]"
    v-bind="props"
  >
    <defs>
      <pattern
        :id="patternId"
        :width="width"
        :height="height"
        patternUnits="userSpaceOnUse"
        :x="x"
        :y="y"
      >
        <path
          :d="`M.5 ${height}V.5H${width}`"
          fill="none"
          :stroke-dasharray="strokeDasharray"
        />
      </pattern>
    </defs>
    <rect
      width="100%"
      height="100%"
      stroke-width="0"
      :fill="`url(#${patternId})`"
    />
    <svg v-if="squares" :x="x" :y="y" class="overflow-visible">
      <rect
        v-for="(square, index) in squares"
        :key="`${square[0]}-${square[1]}`"
        stroke-width="0"
        :width="width - 1"
        :height="height - 1"
        :x="square[0] * width + 1"
        :y="square[1] * height + 1"
      />
    </svg>
  </svg>
</template>

<script>
import { ref } from "vue";

export default {
  name: "GridPattern",
  props: {
    width: {
      type: Number,
      default: 40,
    },
    height: {
      type: Number,
      default: 40,
    },
    x: {
      type: Number,
      default: -1,
    },
    y: {
      type: Number,
      default: -1,
    },
    strokeDasharray: {
      type: [Number, String],
      default: 0,
    },
    squares: {
      type: Array,
      default: () => [],
    },
    className: {
      type: String,
      default: "",
    },
    // Other props if needed
  },
  setup(props) {
    const patternId = ref(`pattern-${Math.random().toString(36).substr(2, 9)}`);
    return { patternId };
  },
};
</script>
