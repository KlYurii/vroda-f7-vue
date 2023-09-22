<template>
  <f7-page class="page-error-500 bg-color-white" no-navbar>
    <div class="e-container">
      <div class="e-content">
        <div class="e-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="184"
            height="202"
            viewBox="0 0 184 202"
            fill="none"
          >
            <g clip-path="url(#clip0_1_1705)">
              <path
                d="M88.2193 0C45.298 0 10.4424 34.8549 10.4424 77.7754V189.398H165.996V77.7754C165.996 34.8549 131.141 0 88.2193 0Z"
                fill="#C9CEDF"
                fill-opacity="0.8"
              />
              <path
                d="M21.9649 79.2157C21.9649 36.2952 56.8205 1.44029 99.7418 1.44029C101.038 1.44029 102.406 1.44029 103.703 1.5123C98.6616 0.5041 93.5484 0 88.2193 0C45.298 0 10.4424 34.8549 10.4424 77.7754V189.398H21.9649V79.2157Z"
                fill="#A7AFC8"
              />
              <path
                d="M176.798 188.317L184 195.519V202H18.3639L8.28174 194.799L176.798 188.317Z"
                fill="#C9CEDF"
                fill-opacity="0.8"
              />
              <path
                d="M77.0567 135.459C78.0511 135.459 78.8571 134.653 78.8571 133.659C78.8571 132.664 78.0511 131.858 77.0567 131.858C76.0624 131.858 75.2563 132.664 75.2563 133.659C75.2563 134.653 76.0624 135.459 77.0567 135.459Z"
                fill="white"
              />
              <path
                d="M156.994 155.191C157.989 155.191 158.795 154.385 158.795 153.39C158.795 152.396 157.989 151.59 156.994 151.59C156 151.59 155.194 152.396 155.194 153.39C155.194 154.385 156 155.191 156.994 155.191Z"
                fill="white"
              />
              <path
                d="M127.468 68.7736C128.462 68.7736 129.268 67.9675 129.268 66.9732C129.268 65.9789 128.462 65.1729 127.468 65.1729C126.474 65.1729 125.667 65.9789 125.667 66.9732C125.667 67.9675 126.474 68.7736 127.468 68.7736Z"
                fill="white"
              />
              <path
                d="M165.996 84.1846C161.891 85.1928 158.794 88.8655 158.794 93.2584C158.794 97.6512 161.891 101.396 165.996 102.332V84.1846Z"
                fill="white"
              />
              <path
                d="M165.996 99.5236C163.476 99.0915 161.171 97.9393 159.299 96.283C160.307 99.3076 162.828 101.612 165.996 102.404V99.5236Z"
                fill="#A7AFC8"
              />
              <path d="M176.438 188.317H0V196.959H176.438V188.317Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_1_1705">
                <rect width="184" height="202" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div class="e-title">Ой, щось пішло не так</div>
        <div class="e-subtitle">Спробуйте оновити сторінку</div>
      </div>
      <f7-link href="/" class="e-link">На головну</f7-link>
    </div>
  </f7-page>
</template>

<script>
import { f7Page, f7Link } from 'framework7-vue';

export default {
  components: {
    f7Page,
    f7Link,
  },
};
</script>

<style scoped>
.page-error-500 {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0;
}

.e-icon {
  padding-bottom: 32px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.e-title {
  color: var(--Black-100, #000);
  text-align: center;
  font-family: 'Raleway', sans-serif;
  font-size: 24px;
  font-weight: 800;
  line-height: 130%;
  padding-bottom: 16px;
}

.e-subtitle {
  color: var(--Black-70-text-body, rgba(0, 0, 0, 0.7));
  text-align: center;
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
}

.link.e-link {
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

.e-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
</style>
