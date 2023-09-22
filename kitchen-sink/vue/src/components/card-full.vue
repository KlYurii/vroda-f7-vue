<template>
  <f7-block class="cf-block">
    <f7-block-title class="cf-header">
      <f7-link>
        <span class="cf-title">{{ name }}</span
        ><f7-badge v-if="top" class="cf-top">ТОП</f7-badge></f7-link
      >
    </f7-block-title>
    <f7-link class="cf-image">
      <img :src="image" />
      <div class="cf-service">{{ service }}</div>
    </f7-link>
    <div class="cf-footer">
      <div class="cf-location">{{ location }}</div>
      <div class="cf-price">{{ price }}</div>
    </div>
  </f7-block>
</template>

<script>
import { f7Block, f7BlockTitle, f7Link, f7Badge } from 'framework7-vue';

export default {
  components: {
    f7Block,
    f7BlockTitle,
    f7Link,
    f7Badge,
  },
  props: {
    name: { type: String, default: '' },
    image: { type: String, default: '' },
    top: { type: Boolean, default: false },
    location: { type: String, default: '' },
    price: { type: String, default: '' },
    service: { type: String, default: '' },
  },
};
</script>

<style scoped>
.cf-block {
  padding: 0 0 16px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  margin: 0;
}
.cf-image {
  overflow: hidden;
  margin: 16px 0;
  width: 100%;
}

.cf-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.block-title.cf-header {
  margin-bottom: 0;
  display: flex;
}

.cf-header a.link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: normal;
}

.cf-top {
  color: var(--White, #fff);
  font-family: 'Raleway', sans-serif;
  font-size: 11px;
  font-weight: 800;
  line-height: 150%;
  border-radius: 16px;
  background: #00d6b8;
  display: inline-flex;
  height: 20px;
  padding: 0px 6px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}
.cf-title {
  display: block;
  color: var(--Black-100, #000);
  font-family: 'Raleway', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 140%;
}
.cf-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cf-location {
  color: var(--Black-40-grey-labels, rgba(0, 0, 0, 0.4));
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
}

.cf-price {
  color: var(--Black-100, #000);
  text-align: right;
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 150%;
}
</style>
