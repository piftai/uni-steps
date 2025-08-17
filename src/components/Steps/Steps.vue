<template>
  <div class="steps-wrapper" :class="`direction-${direction}`">
    <div class="steps-container">
      <Step
        v-for="(step, index) in steps"
        :key="index"
        :step="step"
        :index="index"
        :label="step.label"
        :is-success="step.isSuccess"
        :is-active="index === current"
        :description="step.description"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Step from "./Step.vue";
import { Step as StepType, StepsDirection } from "./types";

export default defineComponent({
  name: "StepsComponent",
  components: { Step },
  props: {
    steps: {
      type: Array as PropType<StepType[]>,
      required: true,
    },
    current: {
      type: Number,
      default: 0,
    },
    direction: {
      type: String as PropType<StepsDirection>,
      default: "horizontal",
      validator: (val: string) => ["horizontal", "vertical"].includes(val),
    },
  },
});
</script>

<style scoped>
.steps-wrapper {
  width: 100%;
  overflow-x: auto;
}

.steps-container {
  display: inline-flex;
  min-width: 100%;
}

/* Горизонтальное направление */
.direction-horizontal .steps-container {
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
}

/* Вертикальное направление */
.direction-vertical .steps-container {
  flex-direction: column;
  gap: 24px;
}
</style>
