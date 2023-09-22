<template>
  <f7-page class="page-dialog bg-color-white" no-navbar>
    <div class="dialog-container">
      <div class="dialog-messages-form">
        <div class="dialog-user">
          <template v-for="(message, ind) in messages" :key="`message-${ind}`">
            <div :class="['m', { 'm-my': message.my }]">
              <svg
                v-if="!message.my"
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="12"
                viewBox="0 0 10 12"
                fill="none"
                class="m-bef"
              >
                <path
                  d="M2.82843 6.35682e-07C1.04662 6.63296e-07 0.154284 2.15428 1.41421 3.41421L10 12L10 5.24537e-07L2.82843 6.35682e-07Z"
                  fill="white"
                  fill-opacity="0.8"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="12"
                viewBox="0 0 10 12"
                fill="none"
                class="m-bef-my"
              >
                <path
                  d="M7.17157 6.35682e-07C8.95338 6.63296e-07 9.84572 2.15428 8.58579 3.41421L-4.29138e-07 12L-9.53674e-07 5.24537e-07L7.17157 6.35682e-07Z"
                  fill="white"
                  fill-opacity="0.8"
                />
              </svg>
              <div class="m-name">{{ message.senderName }}</div>
              <div class="m-text">{{ message.text }}</div>
              <div class="m-footer">
                <div class="m-created">{{ message.createdAt }}</div>
                <div class="m-status">
                  <svg
                    v-if="message.status === 'sended'"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_1189)">
                      <path
                        d="M9 16.2001L5.5 12.7001C5.11 12.3101 4.49 12.3101 4.1 12.7001C3.71 13.0901 3.71 13.7101 4.1 14.1001L8.29 18.2901C8.68 18.6801 9.31 18.6801 9.7 18.2901L20.3 7.70007C20.69 7.31007 20.69 6.69007 20.3 6.30007C19.91 5.91007 19.29 5.91007 18.9 6.30007L9 16.2001Z"
                        fill="#00E2C7"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_1189">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_1180)">
                      <path
                        d="M17.3 6.30004C16.91 5.91004 16.28 5.91004 15.89 6.30004L10.25 11.94L11.66 13.35L17.3 7.70004C17.68 7.32004 17.68 6.68004 17.3 6.30004ZM21.54 6.29004L11.66 16.17L8.18002 12.7C7.79002 12.31 7.16001 12.31 6.77001 12.7C6.38001 13.09 6.38001 13.72 6.77001 14.11L10.95 18.29C11.34 18.68 11.97 18.68 12.36 18.29L22.95 7.71004C23.34 7.32004 23.34 6.69004 22.95 6.30004H22.94C22.56 5.90004 21.93 5.90004 21.54 6.29004ZM1.12001 14.12L5.30001 18.3C5.69001 18.69 6.32001 18.69 6.71001 18.3L7.41001 17.6L2.53001 12.7C2.14001 12.31 1.51001 12.31 1.12001 12.7C0.730015 13.09 0.730015 13.73 1.12001 14.12Z"
                        fill="#00E2C7"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_1180">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </template>
        </div>
        <div class="dialog-form">
          <div class="m-input">
            <input name="name" type="text" placeholder="Повідомлення..." />
          </div>
          <div class="m-smiles">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_1_1198)">
                <path
                  d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z"
                  fill="black"
                  fill-opacity="0.4"
                />
                <path
                  d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z"
                  fill="black"
                  fill-opacity="0.4"
                />
                <path
                  d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM16.41 13.89C16.06 13.67 15.59 13.78 15.38 14.13C14.64 15.3 13.38 16 12 16C10.62 16 9.36 15.3 8.62 14.12C8.4 13.77 7.94 13.66 7.59 13.88C7.24 14.1 7.13 14.56 7.35 14.91C8.37 16.54 10.1 17.5 12 17.5C13.9 17.5 15.63 16.53 16.65 14.92C16.87 14.57 16.76 14.11 16.41 13.89Z"
                  fill="black"
                  fill-opacity="0.4"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_1198">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </f7-page>
</template>
<script>
import { f7Page } from 'framework7-vue';

export default {
  components: {
    f7Page,
  },
  props: {
    id: { type: [String, Number], default: '' },
  },
  data() {
    return {
      messages: [
        {
          senderName: 'Віталій Станіславович',
          text: 'При виконанні стрижок перукар повинен вміти застосовувати різні методи обробки волосся. Необхідно правильно розділити волосся на пасма',
          status: 'readed',
          my: false,
          createdAt: '7:55',
        },
        {
          senderName: 'Віталій Станіславович',
          text: 'Проділи бувають горизонтальні, вертикальні, радіальні, променеві',
          status: 'readed',
          my: false,
          createdAt: '7:59',
        },
        {
          senderName: 'Вікторія М.',
          text: 'Дякую 😍',
          status: 'sended',
          my: true,
          createdAt: '8:01',
        },
      ],
    };
  },
};
</script>

<style scoped>
.page-dialog {
  background: linear-gradient(180deg, #acb1c2 0%, #f6f6f9 45.85%);
}

.dialog-container {
  justify-content: space-around;
  display: flex;
  height: 100%;
}
.dialog-messages-form {
  display: flex;
  flex-direction: column;
}

.dialog-user {
  padding: 32px 16px 0;
  box-sizing: border-box;
  flex: 1 0 auto;
}

.dialog-form {
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 20px;
  background: white;
  border-top: 1px solid var(--Black-12-border, rgba(0, 0, 0, 0.12));
  backdrop-filter: blur(6px);
}

.m-input input {
  width: 291px;
  height: 24px;
  margin-right: 20px;
}

.m {
  display: flex;
  /* width: 327px; */
  padding: 16px 16px 8px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: 0px 16px 16px 16px;
  border-bottom: 1px solid var(--Black-12-border, rgba(0, 0, 0, 0.12));
  background: rgba(255, 255, 255, 0.8);
  margin-left: 12px;
  position: relative;
  margin-bottom: 16px;
}

.m-my {
  padding: 16px 16px 8px 16px;
  border-radius: 16px 0px 16px 16px;
  margin-left: 0;
  margin-right: 12px;
}

.m-bef {
  position: absolute;
  left: -10px;
  top: 0;
}
.m-bef-my {
  position: absolute;
  right: -10px;
  top: 0;
}

.m-name {
  color: var(--Black-100, #000);
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 140%;
}

.m-text {
  color: var(--Black-70-text-body, rgba(0, 0, 0, 0.7));
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 140%;
}

.m-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.m-created {
  color: var(--Black-40-grey-labels, rgba(0, 0, 0, 0.4));
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
}
</style>
