<template>
  <div class="ul-container">
    <div class="ul-avatar">
      <f7-link class="ul-avatar-link">
        <img :src="avatar" />
      </f7-link>
    </div>
    <div class="ul-name">{{ name }}</div>
    <div class="ul-profession">{{ profession }}</div>
    <div class="ul-inline">
      <raiting :value="raiting" />
      <div class="ul-reviews">{{ reviews }}</div>
    </div>
  </div>
</template>
<script>
import { f7Link } from 'framework7-vue';
import Raiting from './raiting.vue';

export default {
  components: {
    f7Link,
    Raiting,
  },
  props: {
    name: { type: String, default: '' },
    avatar: { type: String, default: '' },
    raiting: { type: String, default: '' },
    profession: { type: String, default: '' },
    reviews: { type: String, default: '' },
  },
};
</script>

<style scoped>
.ul-container {
  min-height: 216px;
  /* background: rgba(255, 0, 0, 0.121); */
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.ul-avatar {
  text-align: center;
  padding: 0 16px 0;
  width: 100%;
}
.link.ul-avatar-link {
  text-align: center;
  border-radius: 80px;
  border: 2px solid var(--Black-5-bg, rgba(0, 0, 0, 0.05));
}

.ul-name {
  color: var(--Black-100, #000);
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 140%;
  margin-bottom: 10px;
}

.ul-profession {
  border-radius: 4px;
  background: var(--Black-5-bg, rgba(0, 0, 0, 0.05));
  display: inline-flex;
  padding: 2px 4px;
  align-items: flex-start;
  gap: 10px;
  color: var(--Black-70-text-body, rgba(0, 0, 0, 0.7));
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  margin-bottom: 16px;
}

.ul-inline {
  display: inline-flex;
  align-items: center;
}

.ul-reviews {
  color: var(--Black-70-text-body, rgba(0, 0, 0, 0.7));
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  margin-left: 8px;
}
</style>
