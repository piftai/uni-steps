<template>
  <div
    class="step"
    :class="{
      'step-active': isActive,
      'step-success': isSuccess,
    }"
  >
    <div class="step-indicator">
      <i v-if="icon" :class="icon"></i>
      <span v-else>{{ index + 1 }}</span>
      <span v-if="itemCount" class="step-count">{{ itemCount }}</span>
    </div>
    <div class="step-content">
      <div class="step-label">{{ label }}</div>
      <div class="step-description">{{ description }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "StepItem",
  props: {
    index: { type: Number, required: true },
    label: { type: String, required: true, default: "" },
    itemCount: { type: Number, default: 0 },
    isSuccess: { type: Boolean, default: false },
    isActive: { type: Boolean, default: false },
    icon: { type: String, default: "" },
    direction: { type: String, default: "horizontal" },
    description: { type: String, default: "" },
  },
});
</script>

<style scoped>
.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  flex: 1;
  padding: 0 10px;
}

.step-description {
  color: #00bfff;
}

.steps-horizontal .step {
  display: flex;
  flex-direction: row;
}

.steps-vertical .step {
  display: flex;
  flex-direction: column;
}

.step-indicator {
  width: 40px;
  height: 40px;
  /* border-radius: 50%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  background: #f0f0f0;
  border: 2px solid #d9d9d9;
  position: relative;
}

.step-count {
  position: absolute;
  bottom: -8px;
  right: -8px;
  background: #ff4757;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}

.step-active .step-indicator {
  border-color: #1890ff;
  background: #e6f7ff;
}

.step-success .step-indicator {
  background: #52c41a;
  color: white;
  border-color: #52c41a;
}

.step-label {
  font-weight: 500;
  text-align: center;
  max-width: 100px;
  word-break: break-word;
}
</style>
