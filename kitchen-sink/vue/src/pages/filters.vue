<template>
  <f7-page class="page-filters bg-color-white" no-navbar>
    <f7-block strong class="fl-container">
      <div class="fl-form">
        <f7-segmented class="segmented-pink-elipse" tag="p">
          <f7-button
            class="fl-type"
            :active="activeStrongButton === 0"
            @click="activeStrongButton = 0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                opacity="0.08"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.75525 4.71853C5.17312 4.69614 4.69516 5.1741 4.71755 5.75622L4.94383 11.6394C4.95351 11.8911 5.05785 12.1299 5.23598 12.308L11.4135 18.4855C11.804 18.876 12.4371 18.876 12.8277 18.4855L18.4845 12.8286C18.875 12.4381 18.875 11.805 18.4845 11.4144L12.307 5.23696C12.1289 5.05882 11.8901 4.95449 11.6384 4.9448L5.75525 4.71853Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.83215 2.7198L11.7153 2.94607C12.4705 2.97512 13.1869 3.28813 13.7213 3.82253L19.8988 10C21.0703 11.1716 21.0703 13.0711 19.8988 14.2426L14.2419 19.8995C13.0703 21.0711 11.1708 21.0711 9.99927 19.8995L3.8218 13.722C3.2874 13.1876 2.97438 12.4712 2.94534 11.716L2.71906 5.83288C2.6519 4.08651 4.08577 2.65263 5.83215 2.7198ZM5.75528 4.71832C5.17316 4.69593 4.6952 5.17389 4.71759 5.75601L4.94386 11.6391C4.95354 11.8909 5.05788 12.1297 5.23602 12.3078L11.4135 18.4853C11.804 18.8758 12.4372 18.8758 12.8277 18.4853L18.4846 12.8284C18.8751 12.4379 18.8751 11.8047 18.4846 11.4142L12.3071 5.23675C12.1289 5.05861 11.8901 4.95428 11.6384 4.94459L5.75528 4.71832ZM10.2427 7.41417C11.0238 8.19522 11.0238 9.46155 10.2427 10.2426C9.46168 11.0236 8.19535 11.0236 7.4143 10.2426C6.63326 9.46155 6.63326 8.19522 7.4143 7.41417C8.19535 6.63312 9.46168 6.63312 10.2427 7.41417Z"
                fill="black"
                fill-opacity="0.4"
              /></svg>Послуги</f7-button>
          <f7-button
            class="fl-type"
            :active="activeStrongButton === 1"
            @click="activeStrongButton = 1"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_1_1462)">
                <path
                  opacity="0.3"
                  d="M17.4999 8C17.9599 8 18.4099 7.95 18.8399 7.88C17.4399 5.56 14.8999 4 11.9999 4C11.5399 4 11.0899 4.05 10.6599 4.12C12.0599 6.44 14.5999 8 17.4999 8ZM8.07992 5.03C6.36992 6 5.04992 7.58 4.41992 9.47C6.12992 8.5 7.44992 6.92 8.07992 5.03Z"
                  fill="black"
                  fill-opacity="0.4"
                />
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 4C14.9 4 17.44 5.56 18.84 7.88C18.41 7.95 17.96 8 17.5 8C14.6 8 12.06 6.44 10.66 4.12C11.09 4.05 11.54 4 12 4ZM8.08 5.03C7.45 6.92 6.13 8.5 4.42 9.47C5.05 7.58 6.37 6 8.08 5.03ZM12 20C7.59 20 4 16.41 4 12C4 11.95 4.01 11.9 4.01 11.85C6.61 10.87 8.69 8.86 9.75 6.3C11.58 8.56 14.37 10 17.5 10C18.25 10 18.97 9.91 19.67 9.76C19.88 10.47 20 11.22 20 12C20 16.41 16.41 20 12 20Z"
                  fill="black"
                  fill-opacity="0.4"
                />
                <path
                  d="M9 14.25C9.69036 14.25 10.25 13.6904 10.25 13C10.25 12.3096 9.69036 11.75 9 11.75C8.30964 11.75 7.75 12.3096 7.75 13C7.75 13.6904 8.30964 14.25 9 14.25Z"
                  fill="black"
                  fill-opacity="0.4"
                />
                <path
                  d="M15 14.25C15.6904 14.25 16.25 13.6904 16.25 13C16.25 12.3096 15.6904 11.75 15 11.75C14.3096 11.75 13.75 12.3096 13.75 13C13.75 13.6904 14.3096 14.25 15 14.25Z"
                  fill="black"
                  fill-opacity="0.4"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_1462">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs></svg>Майстри</f7-button
          >
          <f7-button
            class="fl-type"
            :active="activeStrongButton === 2"
            @click="activeStrongButton = 2"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_1_1523)">
                <path
                  opacity="0.3"
                  d="M6.44009 9.86L7.02009 5H5.05009L4.04009 9.36C3.94009 9.78 4.03009 10.2 4.29009 10.53C4.43009 10.71 4.73009 11 5.23009 11C5.84009 11 6.36009 10.51 6.44009 9.86Z"
                  fill="black"
                  fill-opacity="0.4"
                />
                <path
                  opacity="0.3"
                  d="M9.70989 11C10.4499 11 10.9999 10.41 10.9999 9.69V5H9.03989L8.48989 9.52C8.43989 9.91 8.55989 10.3 8.81989 10.59C9.04989 10.85 9.36989 11 9.70989 11Z"
                  fill="black"
                  fill-opacity="0.4"
                />
                <path
                  opacity="0.3"
                  d="M14.22 11C14.63 11 14.94 10.85 15.18 10.59C15.43 10.3 15.55 9.91 15.51 9.52L14.96 5H13V9.69C13 10.41 13.55 11 14.22 11Z"
                  fill="black"
                  fill-opacity="0.4"
                />
                <path
                  opacity="0.3"
                  d="M18.91 4.98999L16.98 4.99999L17.56 9.85999C17.64 10.51 18.16 11 18.77 11C19.26 11 19.57 10.71 19.7 10.53C19.96 10.2 20.05 9.76999 19.95 9.35999L18.91 4.98999Z"
                  fill="black"
                  fill-opacity="0.4"
                />
                <path
                  d="M21.9 8.89L20.85 4.52C20.63 3.62 19.85 3 18.94 3H5.05001C4.15001 3 3.36001 3.63 3.15001 4.52L2.10001 8.89C1.86001 9.91 2.08001 10.95 2.72001 11.77C2.80001 11.88 2.91001 11.96 3.00001 12.06V19C3.00001 20.1 3.90001 21 5.00001 21H19C20.1 21 21 20.1 21 19V12.06C21.09 11.97 21.2 11.88 21.28 11.78C21.92 10.96 22.15 9.91 21.9 8.89ZM13 5H14.96L15.5 9.52C15.55 9.91 15.43 10.3 15.17 10.59C14.95 10.85 14.63 11 14.22 11C13.55 11 13 10.41 13 9.69V5ZM8.49001 9.52L9.04001 5H11V9.69C11 10.41 10.45 11 9.71001 11C9.37001 11 9.06001 10.85 8.82001 10.59C8.57001 10.3 8.45001 9.91 8.49001 9.52ZM4.29001 10.53C4.03001 10.2 3.94001 9.77 4.04001 9.36L5.05001 5H7.02001L6.44001 9.86C6.36001 10.51 5.84001 11 5.23001 11C4.73001 11 4.43001 10.71 4.29001 10.53ZM19 19H5.00001V12.97C5.08001 12.98 5.15001 13 5.23001 13C6.10001 13 6.89001 12.64 7.47001 12.05C8.07001 12.65 8.87001 13 9.78001 13C10.65 13 11.43 12.64 12.01 12.07C12.6 12.64 13.4 13 14.3 13C15.14 13 15.94 12.65 16.54 12.05C17.12 12.64 17.91 13 18.78 13C18.86 13 18.93 12.98 19.01 12.97V19H19ZM19.71 10.53C19.57 10.71 19.27 11 18.77 11C18.16 11 17.63 10.51 17.56 9.86L16.98 5L18.91 4.99L19.96 9.36C20.06 9.78 19.97 10.21 19.71 10.53Z"
                  fill="black"
                  fill-opacity="0.4"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_1523">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs></svg>Салони</f7-button
          >
        </f7-segmented>

        <div class="user-services user-services-strong">
          <f7-input name="hall" value="1" type="select" outline>
            <option value="1" selected disabled>Всі спеціальності</option>
            <option value="2">Послуга 1</option>
            <option value="3">Послуга 2</option>
          </f7-input>
        </div>

        <div class="user-services">
          <f7-input name="hall" value="1" type="select" outline>
            <option value="1" selected disabled>Київ Святошинський</option>
            <option value="2">Послуга 1</option>
            <option value="3">Послуга 2</option>
          </f7-input>
        </div>

        <div class="buttons-block">
          <f7-block-title class="buttons-block-title-pink">Бізнес</f7-block-title>

          <f7-segmented class="segmented-black" raised tag="p">
            <f7-button :active="activeBlackButton === 0" @click="activeBlackButton = 0"
              >Всі</f7-button
            >
            <f7-button :active="activeBlackButton === 1" @click="activeBlackButton = 1"
              >Майстри</f7-button
            >
            <f7-button :active="activeBlackButton === 2" @click="activeBlackButton = 2"
              >Салони</f7-button
            >
          </f7-segmented>
        </div>

        <div class="buttons-block">
          <f7-block-title class="buttons-block-title-pink">Сортування</f7-block-title>

          <f7-segmented class="segmented-black" raised tag="p">
            <f7-button :active="activeBlack2Button === 0" @click="activeBlack2Button = 0"
              >Популярні</f7-button
            >
            <f7-button :active="activeBlack2Button === 1" @click="activeBlack2Button = 1"
              >За рейтингом</f7-button
            >
            <f7-button :active="activeBlack2Button === 2" @click="activeBlack2Button = 2"
              >Найновіші</f7-button
            >
            <f7-button :active="activeBlack2Button === 3" @click="activeBlack2Button = 3"
              >Найдешевші</f7-button
            >
            <f7-button :active="activeBlack2Button === 4" @click="activeBlack2Button = 4"
              >Найдорожчі</f7-button
            >
          </f7-segmented>
        </div>
      </div>
      <f7-link class="fl-link" href="/">Застосувати фільтри</f7-link>
    </f7-block>
  </f7-page>
</template>

<script>
import {
  f7Block,
  f7BlockTitle,
  f7Page,
  f7Link,
  f7Button,
  f7Segmented,
  f7Input,
} from 'framework7-vue';

export default {
  components: {
    f7Block,
    f7Page,
    f7Link,
    f7Button,
    f7Segmented,
    f7Input,
    f7BlockTitle,
  },
  data() {
    return {
      activeStrongButton: 0,
      activeBlackButton: 0,
      activeBlack2Button: 0,
    };
  },
};
</script>

<style>
@import url('../assets/css/base.css');
</style>

<style scoped>
.page-filters {
  display: flex;
  flex-direction: column;
  padding: 0;
  align-items: center;
  margin: 0;
}

.fl-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin: 0;
  align-items: center;
}

.segmented.segmented-pink-elipse .fl-type {
  height: 48px;
  padding: 8px;
  border-radius: 32px;
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 140%;
  color: var(--Black-40-grey-labels, rgba(0, 0, 0, 0.4));
  text-transform: none;
}

.segmented.segmented-pink-elipse .fl-type.button-active {
  color: var(--Rose-Red, #ed4457);
  background: rgba(237, 68, 87, 0.1);
}
.segmented.segmented-pink-elipse .fl-type.button-active svg path {
  fill: #ed4457;
  fill-opacity: 1;
}

.segmented.segmented-pink-elipse .button:first-child,
.segmented.segmented-pink-elipse .button:last-child {
  border-radius: 32px;
}

.segmented.segmented-pink-elipse {
  margin: 16px 0 32px;
}

.segmented.segmented-black {
  border-radius: 0;
  box-shadow: none;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  /* width: 100%; */
}

.buttons-block {
  padding: 16px 0;
}

.buttons-block .buttons-block-title-pink {
  color: var(--Rose-Red, #ed4457);
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 140%;
  margin: 0 0 16px 0;
}

.link.fl-link {
  display: flex;
  width: 311px;
  height: 56px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 16px;
  background: var(--Black-100, #000);
  color: var(--White, #fff);
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  font-weight: 800;
  line-height: 150%;
}
</style>
