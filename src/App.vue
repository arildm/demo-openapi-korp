<script setup lang="ts">
const kwic = [
  {
    tokens: [
      { word: "Regnet" },
      { word: "det" },
      { word: "bara" },
      { word: "faller" },
      { word: "ned" },
    ],
  },
  {
    tokens: [
      { word: "Efter" },
      { word: "regnet" },
      { word: "kommer" },
      { word: "solen" },
    ],
  },
];
</script>

<template>
  <h1>Demo: OpenAPI in Korp</h1>

  <div v-for="row in kwic">
    <span v-for="token in row.tokens">
      {{ token.word + " " }}
    </span>
  </div>
</template>

<style scoped></style>
