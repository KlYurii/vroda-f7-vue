<template>
  <div class="empty-block">
    <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" fill="none">
      <rect width="88" height="88" rx="16" fill="black" fill-opacity="0.05" />
      <path d="M44 24L71.7128 72H16.2872L44 24Z" fill="black" fill-opacity="0.05" />
      <circle cx="72" cy="16" r="8" fill="black" fill-opacity="0.05" />
    </svg>
    {{ value }}
  </div>
</template>

<script>
export default {
  props: {
    value: { type: String, default: 'Повідомлень ще немає' },
  },
};
</script>

<style scoped>
.empty-block {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--Black-70-text-body, rgba(0, 0, 0, 0.7));
  text-align: center;
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  padding: 64px 0 32px;
  flex-direction: column;
}

.empty-block svg {
  margin-bottom: 16px;
}
</style>
