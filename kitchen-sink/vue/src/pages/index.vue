<template>
  <f7-page class="page-home bg-color-white" no-navbar>
    <div
      :style="{ background: 'url(./img/bg.png) no-repeat center top', 'background-size': 'cover' }"
      class="page-bg"
    ></div>
    <f7-block strong class="base-content-block">
      <div
        :style="{
          background: 'url(./img/avatar1.png) no-repeat center top',
        }"
        class="avatar"
      ></div>
      <f7-link class="nav-mail" href="/home/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="none"
        >
          <path
            d="M18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM17.6 4.25L11.06 8.34C10.41 8.75 9.59 8.75 8.94 8.34L2.4 4.25C2.15 4.09 2 3.82 2 3.53C2 2.86 2.73 2.46 3.3 2.81L10 7L16.7 2.81C17.27 2.46 18 2.86 18 3.53C18 3.82 17.85 4.09 17.6 4.25Z"
            fill="black"
          />
        </svg>
      </f7-link>
      <div class="block-rating-users">
        <div class="block-rating">
          <div>😍 4.9</div>
        </div>
        <div class="block-users">
          <img src="img/avatar2.png" />
          <img src="img/avatar3.png" />
          <img src="img/avatar4.png" />
        </div>
      </div>
      <f7-block-title class="text-align-center user-name">Володимир К.</f7-block-title>
      <div class="block-subtitle">Масажист</div>
      <div class="block-subtitle2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <g clip-path="url(#clip0_1_82)">
            <path
              d="M8.00002 7.99992C7.26669 7.99992 6.66669 7.39992 6.66669 6.66658C6.66669 5.93325 7.26669 5.33325 8.00002 5.33325C8.73335 5.33325 9.33335 5.93325 9.33335 6.66658C9.33335 7.39992 8.73335 7.99992 8.00002 7.99992ZM12 6.79992C12 4.37992 10.2334 2.66659 8.00002 2.66659C5.76669 2.66659 4.00002 4.37992 4.00002 6.79992C4.00002 8.35992 5.30002 10.4266 8.00002 12.8933C10.7 10.4266 12 8.35992 12 6.79992ZM8.00002 1.33325C10.8 1.33325 13.3334 3.47992 13.3334 6.79992C13.3334 9.01325 11.5534 11.6333 8.00002 14.6666C4.44669 11.6333 2.66669 9.01325 2.66669 6.79992C2.66669 3.47992 5.20002 1.33325 8.00002 1.33325Z"
              fill="black"
              fill-opacity="0.4"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_82">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <div>Кременчук, Крюківський</div>
      </div>
      <p class="block-p">
        👋 Привіт! Я - Володимир. Кажуть, що я дивовижний масажист. Не вірите - замовте одну з моїх
        послуг. Це короткий текст про майстра, який можна розгорнути... >
      </p>
    </f7-block>
  </f7-page>
</template>

<script>
import { f7Page, f7Block, f7BlockTitle, f7Link, theme } from 'framework7-vue';

export default {
  components: {
    f7Page,
    f7Block,
    f7BlockTitle,
    f7Link,
  },
  props: {
    f7router: Object,
  },
  setup() {
    return {
      theme,
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700;800&display=swap');

.avatar {
  width: 112px;
  height: 112px;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -56px;
  box-sizing: border-box;
}

.link.nav-mail {
  position: absolute;
  display: flex;
  width: 56px;
  height: 56px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 36px;
  background: linear-gradient(180deg, #fff 0%, #fafafa 100%);
  box-shadow:
    0px 10px 32px -4px rgba(24, 39, 75, 0.1),
    0px 6px 14px -6px rgba(24, 39, 75, 0.12);
  box-sizing: border-box;
  right: 16px;
  top: -35px;
}

.page-bg {
  height: 320px;
  width: 100%;
  box-sizing: border-box;
  position: absolute;
}
.block.base-content-block {
  border-radius: 32px 32px 0 0;
  margin-top: 288px;
  margin-bottom: 0;
  padding-top: 0;
}

.block-rating-users {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
}

.block-rating {
  text-align: right;
  width: calc(50% - 56px);
}

.block-rating div {
  border-radius: 16px;
  background: var(--Black-5-bg, rgba(0, 0, 0, 0.05));
  display: inline-flex;
  height: 24px;
  padding: 0px 6px;
  align-items: center;
  width: auto;
  justify-content: flex-end;
  /* font-family: 'Raleway', sans-serif; */
  font-size: 16px;
  font-weight: 700;
  line-height: 140%;
}

.block-rating,
.block-users {
}

.block-users {
  width: calc(50% - 56px);
  display: inline-flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
}

.block-users img {
  border-radius: 50%;
  overflow: hidden;
  width: 24px;
  z-index: 1;
}

.block-users img:not(:last-child) {
  position: relative;
  margin-left: -10px;
}

.block-title.user-name {
  font-family: 'Raleway', sans-serif;
  font-weight: 800;
  font-size: 20px;
  line-height: 140%;
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 16px 0 8px 0;
}

.block-subtitle {
  color: var(--Black-40-grey-labels, rgba(0, 0, 0, 0.4));
  text-align: center;
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  font-weight: 700;
}
.block-subtitle2 {
  display: flex;
  color: var(--Black-40-grey-labels, rgba(0, 0, 0, 0.4));
  font-family: Raleway;
  font-size: 14px;
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  text-align: center;
  justify-content: center;
  align-items: center;
}

p.block-p {
  color: var(--Black-70-text-body, rgba(0, 0, 0, 0.7));
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
}
</style>
