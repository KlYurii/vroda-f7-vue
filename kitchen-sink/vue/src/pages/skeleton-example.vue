<template>
  <f7-page class="page-home bg-color-white" no-navbar>
    <div
      :style="{
        background: 'url(./svg/bg-gradient.svg) no-repeat center top',
        'background-size': 'cover',
      }"
      class="page-bg skeleton-example-bg"
    >
      <f7-link href="/" class="se-back-link"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_3_1790)">
            <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="black" />
          </g>
          <defs>
            <clipPath id="clip0_3_1790">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs></svg>Послуги майстра манікюру</f7-link
      >
      <f7-block-title class="se-title">Шукаємо 🔎</f7-block-title>
      <div class="se-circle">
        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
          <circle cx="2" cy="2" r="2" fill="white"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
          <circle cx="4" cy="4" r="4" fill="white"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
          <circle cx="5" cy="5" r="5" fill="white"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
          <circle cx="7" cy="7" r="7" fill="white"/>
        </svg>
      </div>

      <div class="se-buttons">
        <button class="se-btn se-btn-black">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g clip-path="url(#clip0_3_1768)">
              <path d="M7.00018 6H17.0002L11.9902 12.3L7.00018 6ZM4.25018 5.61C6.27018 8.2 10.0002 13 10.0002 13V19C10.0002 19.55 10.4502 20 11.0002 20H13.0002C13.5502 20 14.0002 19.55 14.0002 19V13C14.0002 13 17.7202 8.2 19.7402 5.61C20.2502 4.95 19.7802 4 18.9502 4H5.04018C4.21018 4 3.74018 4.95 4.25018 5.61Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_3_1768">
                <rect width="24" height="24" fill="white"/>
              </clipPath>
            </defs>
          </svg>Фільтри <span>(3)</span>
        </button>
        <button class="se-btn">
          Майстри <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g clip-path="url(#clip0_3_1776)">
              <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="black"/>
            </g>
            <defs>
              <clipPath id="clip0_3_1776">
                <rect width="24" height="24" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </button>
        <button class="se-btn">
          Фільтр 3<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g clip-path="url(#clip0_3_1776)">
              <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="black"/>
            </g>
            <defs>
              <clipPath id="clip0_3_1776">
                <rect width="24" height="24" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
    <f7-block strong class="base-content-block skeleton-example">

      <div class="se-header">
        <div
          style="width: 134px; height: 20px"
          class="se-text skeleton-text skeleton-effect-fade"
        ></div>
        <div
          style="width: 134px; height: 20px"
          class="se-text skeleton-text skeleton-effect-fade"
        ></div>
        <f7-skeleton-block
          style="width: 40px; height: 40px; border-radius: 50%; background: rgba(0,0,0,0.05)"
          class="skeleton-effect-fade"
        />
      </div>

      <div class="se-examle1">
        <div class="se-group">
          <div
            style="width: 100%; height: 20px"
            class="se-text skeleton-text skeleton-effect-fade"
          ></div>
          <div
            style="width: 100%; height: 20px"
            class="se-text skeleton-text skeleton-effect-fade"
          ></div>
        </div>
        <div
          style="width: 40px; height: 20px; border-radius: 16px; background: rgba(0, 0, 0, 0.12)"
          class="se-text skeleton-text skeleton-effect-fade"
        ></div>
      </div>

      <div v-for="index in 4" :key="index" class="se-examle2">
        <div
          class="se-left se-text skeleton-text skeleton-effect-fade"
          style="width: 50%; height: 187px; margin-right: 8px"
        ></div>
        <div class="se-right" style="width: 50%; margin-left;: 8px">
          <div
            style="width: 100%; height: 20px"
            class="se-text skeleton-text skeleton-effect-fade"
          ></div>
          <div
            style="width: 80%; height: 20px"
            class="se-text skeleton-text skeleton-effect-fade"
          ></div>
          <div
            style="width: 70px; height: 30px"
            class="se-text skeleton-text skeleton-effect-fade"
          ></div>
          <div class="se-group-circle">
            <div
              style="min-width: 40px; height: 40px; border-radius: 50%; margin-right: 8px"
              class="se-text skeleton-text skeleton-effect-fade"
            ></div>
            <div
              style="width: 100%; height: 20px"
              class="se-text skeleton-text skeleton-effect-fade"
            ></div>
          </div>

          <div class="se-group-elipse">
            <div
              style="width: 57px; height: 24px; border-radius: 16px; margin-right: 8px"
              class="se-text skeleton-text skeleton-effect-fade"
            ></div>
            <div
              style="width: 100%; height: 24px"
              class="se-text skeleton-text skeleton-effect-fade"
            ></div>
          </div>
        </div>
      </div>
    </f7-block>
  </f7-page>
</template>

<script>
import { f7Page, f7Block, f7Link, f7BlockTitle, f7SkeletonBlock } from 'framework7-vue';

export default {
  components: {
    f7Page,
    f7Block,
    f7Link,
    f7BlockTitle,
    f7SkeletonBlock,
  },
  props: {
    f7router: Object,
  },
  data() {
    return {};
  },
};
</script>

<style>
@import url('../assets/css/base.css');
@import url('../assets/css/home.css');
</style>

<style scoped>
.block.base-content-block.skeleton-example {
  margin-top: 254px;
  padding: 32px 16px;
}

.skeleton-example-bg {
  height: 270px;
  padding: 32px 0 32px 32px;
}

.link.se-back-link {
  color: var(--Black-100, #000);
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 140%;
  margin: 0 0 17px 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.block-title.se-title {
  color: var(--Black-100, #000);
  font-family: 'Raleway', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: 130%;
  margin: 0;
  padding: 0;
  margin-bottom: 16px;
}

.se-circle {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  margin-right: 32px;
}

.se-circle svg {
  margin: 0 8px;
}

.se-buttons {
  overflow: auto;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  display: flex;
}

.se-btn {
  display: flex;
  height: 56px;
  padding: 0px 16px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: var(--White, #000);
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  font-weight: 800;
  line-height: 150%;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.4);
  border: none;
  white-space: nowrap;
  margin-right: 8px;
}

.se-btn-black {
  color: var(--White, #fff);
  background: var(--Black-100, #000);
}
.se-btn span {
  color: #a3a3a3;
  font-family: Arial, Helvetica, sans-serif;
}

.se-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.se-text {
  border-radius: 4px;
  background: var(--Black-5-bg, rgba(0, 0, 0, 0.05));
}

.se-examle1 {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px 0;
}

.se-examle1 .se-group {
  padding-right: 8px;
  width: 100%;
}

.se-examle1 .se-group .se-text {
  margin-bottom: 10px;
}

.se-examle2 {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
.se-examle2 .se-group-circle {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.se-examle2 .se-group-elipse {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.se-examle2 > div {
  box-sizing: border-box;
}

.se-examle2 .se-right {
  display: flex;
  flex-direction: column;
  min-height: 187px;
  justify-content: space-between;
}
</style>
