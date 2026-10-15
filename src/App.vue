<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { loadKwic } from "./client";
import type { components } from "./api";

const data = ref<components["schemas"]["ConcordanceResponse"]>();

watchEffect(async () => {
  data.value = await loadKwic();
});
</script>

<template>
  <h1>Demo: OpenAPI in Korp</h1>

  <p v-if="data?.total_hits != null">{{ data.total_hits }} hits</p>

  <div v-for="row in data?.kwic">
    {{ row.corpus }}:
    <span v-for="token in row.tokens">
      {{ token.word + " " }}
    </span>
  </div>
</template>

<style scoped></style>
