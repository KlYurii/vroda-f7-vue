<template>
  <div class="re-container">
    <div class="re-top">
      <div class="re-top-left">
        <img :src="avatar" />
        <div class="re-top-np">
          <div class="re-top-name">{{ name }}</div>
          <div class="re-top-prof">{{ profession }}</div>
        </div>
      </div>
      <raiting :value="raiting" />
    </div>
    <div class="re-desc">{{ description }}</div>
    <div class="re-created">{{ createdAt }}</div>
  </div>
</template>
<script>
import Raiting from './raiting.vue';

export default {
  components: {
    Raiting,
  },
  props: {
    name: { type: String, default: '' },
    avatar: { type: String, default: '' },
    raiting: { type: String, default: '' },
    profession: { type: String, default: '' },
    description: { type: String, default: '' },
    createdAt: { type: String, default: '' },
  },
};
</script>

<style scoped>
.re-container {
  flex-wrap: wrap;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  padding: 16px 0 8px 0;
}

.re-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 8px;
}

.re-top-left img {
  width: 40px;
  height: 40px;
  margin-right: 8px;
}

.re-top-name {
  color: var(--Black-100, #000);
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 120%;
}

.re-top-prof {
  color: var(--Black-40-grey-labels, rgba(0, 0, 0, 0.4));
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
}

.re-top-left {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.re-desc {
  color: var(--Black-100, #000);
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
}
.re-created {
  color: var(--Black-40-grey-labels, rgba(0, 0, 0, 0.4));
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
}
</style>
