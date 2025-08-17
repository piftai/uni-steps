<template>
  <!-- Весь код компонента Steps будет здесь -->
  <div class="app">
    <!-- Заголовок -->
    <h1>Пример Steps Component</h1>

    <!-- Сам компонент Steps -->
    <div class="steps-container">
      <Steps :steps="steps" :current="currentStep" direction="horizontal" />
    </div>

    <!-- Кнопки управления -->
    <div class="controls">
      <button @click="prevStep">← Назад</button>
      <button @click="nextStep">Вперед →</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Steps from "@/components/Steps/Steps.vue"; // Путь к вашему компоненту Steps

export default defineComponent({
  name: "App",
  components: { Steps },
  setup() {
    // Текущий активный шаг (начинаем с 0)
    const currentStep = ref(0);

    // Данные для шагов
    const steps = ref([
      { label: "Корзина", isSuccess: true },
      { label: "Доставка", isSuccess: false }, // Пример иконки (Font Awesome)
      { label: "Оплата", description: "Оплатите покупку" },
      { label: "Подтверждение", description: "Подтвердите покупку" },
    ]);

    // Переключение между шагами
    const nextStep = () => {
      if (currentStep.value < steps.value.length - 1) {
        currentStep.value++;
      }
    };

    const prevStep = () => {
      if (currentStep.value > 0) {
        currentStep.value--;
      }
    };

    return { steps, currentStep, nextStep, prevStep };
  },
});
</script>

<style>
/* Стили для App.vue */
.app {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  font-family: Arial, sans-serif;
  text-align: center;
}

.steps-container {
  margin: 2rem 0;
}

.controls {
  margin-top: 2rem;
}

button {
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  background: #1890ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background: #40a9ff;
}

button:disabled {
  background: #d9d9d9;
  cursor: not-allowed;
}
</style>
