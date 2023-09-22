<template>
  <div class="rating">
    <div>{{ value }}</div>
  </div>
</template>

<script>
export default {
  props: {
    value: { type: String, default: '' },
  },
};
</script>

<style scoped>
.rating {
  width: auto;
}

.rating div {
  border-radius: 16px;
  background: var(--Black-5-bg, rgba(0, 0, 0, 0.05));
  display: inline-flex;
  height: 24px;
  padding: 0px 6px;
  align-items: center;
  width: auto;
  font-size: 16px;
  font-weight: 700;
  line-height: 140%;
}
</style>
