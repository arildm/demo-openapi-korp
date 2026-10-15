<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { loadKwic } from "./client";

const data = ref();

watchEffect(async () => {
  data.value = await loadKwic();
});
</script>

<template>
  <h1>Demo: OpenAPI in Korp</h1>

  <div v-for="row in data.kwic">
    <span v-for="token in row.tokens">
      {{ token.word + " " }}
    </span>
  </div>
</template>

<style scoped></style>
