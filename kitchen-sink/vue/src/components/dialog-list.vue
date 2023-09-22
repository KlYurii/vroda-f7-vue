<template>
  <div class="dl">
    <div class="dl-left">
      <div class="dl-avatar">
        <img :src="avatar" />
      </div>
      <div class="dl-name-prof">
        <div class="dl-name">{{ name }}</div>
        <div class="dl-prof">{{ profession }}</div>
      </div>
    </div>
    <div v-if="count" class="dl-badge">{{ count }}</div>
  </div>
</template>

<script>
export default {
  props: {
    avatar: { type: String, default: '' },
    name: { type: String, default: '' },
    profession: { type: String, default: '' },
    count: { type: Number, default: 0 },
  },
};
</script>

<style scoped>
.dl {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  box-sizing: border-box;
  border-bottom: 1px solid var(--Black-12-border, rgba(0, 0, 0, 0.12));
}

.dl-left {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.dl-avatar img {
  width: 56px;
  height: 56px;
}
.dl-avatar {
  padding-right: 16px;
}

.dl-name-prof {
}

.dl-name {
  color: var(--Black-100, #000);
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 140%;
}

.dl-prof {
  color: var(--Black-40-grey-labels, rgba(0, 0, 0, 0.4));
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
}

.dl-badge {
  display: flex;
  min-width: 22px;
  height: 22px;
  padding: 2px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 100px;
  background: var(--Rose-Red, #ed4457);
  color: var(--m-3-sys-light-on-error, #fff);
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.24px;
}
</style>
