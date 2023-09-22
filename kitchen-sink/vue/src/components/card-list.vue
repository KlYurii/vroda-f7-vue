<template>
  <f7-block class="cl-block">
    <f7-link class="cl-image"><img :src="image" /></f7-link>
    <div class="cl-info">
      <f7-link>{{ name }}</f7-link>
      <div class="cl-price">{{ price }}</div>
      <div class="cl-tag">{{ tag }}</div>
      <div class="cl-location">{{ location }}</div>
    </div>
  </f7-block>
</template>

<script>
import { f7Block, f7Link } from 'framework7-vue';

export default {
  components: {
    f7Block,
    f7Link,
  },
  props: {
    name: { type: String, default: '' },
    image: { type: String, default: '' },
    location: { type: String, default: '' },
    tag: { type: String, default: '' },
    price: { type: String, default: '' },
  },
};
</script>

<style scoped>
.cl-block {
  padding: 0 0 16px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  margin: 32px 0 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: normal;
}
.cl-image {
  padding-right: 16px;
}

.cl-image img {
  min-width: 164px;
  width: auto;
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.block-title.cl-header {
  margin-bottom: 0;
  display: flex;
}

.cl-info a.link {
  color: var(--Black-100, #000);
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 140%;
}

.cl-info {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  min-height: 187px;
}

.cl-tag {
  border-radius: 4px;
  background: var(--Black-5-bg, rgba(0, 0, 0, 0.05));
  color: var(--Black-70-text-body, rgba(0, 0, 0, 0.7));
  padding: 2px 6px;
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
}
.cl-title {
  display: block;
  color: var(--Black-100, #000);
  font-family: 'Raleway', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 140%;
}
.cl-location {
  color: var(--Black-40-grey-labels, rgba(0, 0, 0, 0.4));
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
}

.cl-price {
  color: var(--Black-100, #000);
  text-align: right;
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 150%;
}
</style>
