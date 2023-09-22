<template>
  <f7-page class="page-home bg-color-white" no-navbar>
    <div
      :style="{ background: 'url(./img/bg2.png) no-repeat center top', 'background-size': 'cover' }"
      class="page-bg"
    ></div>
    <f7-block strong class="base-content-block">
      <div
        :style="{
          background: 'url(./img/avatar8.png) no-repeat center top',
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
      <f7-block-title class="text-align-center user-name">Скажені вуса</f7-block-title>
      <div class="block-subtitle">Барбершоп</div>
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
        <div>Кременчук, Шевченка 75 А</div>
      </div>
      <p class="block-p">
        В нашому барбершопі працюють найкращі. Ми - переможці конкурсу Барбер 2023 💈. Зробимо вам кльову зачіску. А ще, кажуть що ми хороші співрозмовники... >
      </p>

      <div class="app-tabs">
        <f7-link tab-link="#tab-1" tab-link-active>Послуги</f7-link>
        <f7-link tab-link="#tab-2">Оренда &nbsp;<f7-badge>36</f7-badge></f7-link>
        <f7-link tab-link="#tab-3">Відгуки &nbsp;<f7-badge>76</f7-badge></f7-link>
      </div>

      <f7-tabs>
        <f7-tab id="tab-1" class="page-content" tab-active>
          <div class="user-services">
            <f7-input name="hall" value="1" type="select" outline>
              <option value="1" selected disabled>Послуги Володимира...</option>
              <option value="2">Послуга 1</option>
              <option value="3">Послуга 2</option>
            </f7-input>
          </div>

          <div class="block-sort">
            <div class="bl-sort-item block-cout">
              <strong>17</strong>&nbsp;
              <span>б’юті послуг</span>
            </div>
            <div class="bl-sort-item btn-sort">
              <span>За популярністю</span>&nbsp;
              <div class="bl-sort-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1_99)">
                    <path d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z" fill="black" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_99">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <template v-for="(service, ind) in topServices" :key="`top-service-${ind}`">
            <card-full v-bind="service" />
          </template>
          <template v-for="(service, ind) in services" :key="`service-${ind}`">
            <card-list v-bind="service" />
          </template>

          <pagination />

          <f7-block-title class="title-h2"> Місцезнаходження </f7-block-title>

          <div class="lm-map">
            <div class="lm-header">
              <span class="lm-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1_210)">
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9C5 10.74 5.5 12.37 6.41 13.84C7.36 15.38 8.61 16.7 9.57 18.24C10.04 18.99 10.38 19.69 10.74 20.5C11 21.05 11.21 22 12 22C12.79 22 13 21.05 13.25 20.5C13.62 19.69 13.95 18.99 14.42 18.24C15.38 16.71 16.63 15.39 17.58 13.84C18.5 12.37 19 10.74 19 9C19 5.13 15.87 2 12 2ZM12 11.75C10.62 11.75 9.5 10.63 9.5 9.25C9.5 7.87 10.62 6.75 12 6.75C13.38 6.75 14.5 7.87 14.5 9.25C14.5 10.63 13.38 11.75 12 11.75Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_210">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span class="lm-name">Кременчук, Крюківський</span>
            </div>

            <div class="lm-footer">
              <img src="/img/map.png" />
            </div>
          </div>

          <div class="tag-container">
            <div class="tag-label">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_1_813)">
                  <path
                    d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_813">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>Послуги барбершопу</span>
            </div>
            <f7-link href="#" class="tag-link">Назва тегу для пошуку і каталогізації</f7-link>
          </div>
        </f7-tab>
        <f7-tab id="tab-2" class="page-content"
          ><p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quasi architecto
            temporibus aliquam sequi laboriosam quis? Rem tempora, eveniet, officia laudantium id,
            nobis corporis quod laboriosam quidem eligendi aliquam veritatis.
          </p></f7-tab
        >
        <f7-tab id="tab-3" class="page-content">
          <div class="block-sort">
            <div class="bl-ru-left">
              <raiting value="😍 4.9" />
              <div class="block-users bl-full-w">
                <img src="img/avatar2.png" />
                <img src="img/avatar3.png" />
                <img src="img/avatar4.png" />
              </div>
            </div>
            <div class="bl-sort-item btn-sort">
              <span>За популярністю</span>&nbsp;
              <div class="bl-sort-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1_99)">
                    <path d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z" fill="black" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_99">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <template v-for="(review, ind) in reviews" :key="`review-${ind}`">
            <review v-if="ind < commentsToShow" v-bind="review" />
          </template>
          <div v-if="commentsToShow < reviews.length || reviews.length > commentsToShow">
            <div class="btn-to-show" @click="commentsToShow += 4">
              Розгорнути відгуки
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M8.62 9.29006L12.5 13.1701L16.38 9.29006C16.77 8.90006 17.4 8.90006 17.79 9.29006C18.18 9.68006 18.18 10.3101 17.79 10.7001L13.2 15.2901C12.81 15.6801 12.18 15.6801 11.79 15.2901L7.2 10.7001C6.81 10.3101 6.81 9.68006 7.2 9.29006C7.59 8.91006 8.23 8.90006 8.62 9.29006Z"
                  fill="#ED4457"
                />
              </svg>
            </div>
          </div>

          <div class="btn-login">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_1_409)">
                <path
                  d="M12.65 10C11.7 7.31 8.9 5.5 5.77 6.12C3.48 6.58 1.62 8.41 1.14 10.7C0.320001 14.57 3.26 18 7 18C9.61 18 11.83 16.33 12.65 14H17V16C17 17.1 17.9 18 19 18C20.1 18 21 17.1 21 16V14C22.1 14 23 13.1 23 12C23 10.9 22.1 10 21 10H12.65ZM7 14C5.9 14 5 13.1 5 12C5 10.9 5.9 10 7 10C8.1 10 9 10.9 9 12C9 13.1 8.1 14 7 14Z"
                  fill="black"
                  fill-opacity="0.8"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_409">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Увійти і написати
          </div>
        </f7-tab>
      </f7-tabs>
    </f7-block>
  </f7-page>
</template>

<script>
import {
  f7Page,
  f7Block,
  f7BlockTitle,
  f7Link,
  f7Tabs,
  f7Tab,
  f7Badge,
  f7Input,
  theme,
} from 'framework7-vue';
import CardFull from '../components/card-full.vue';
import CardList from '../components/card-list.vue';
import Pagination from '../components/pagination.vue';
import UserList from '../components/user-list.vue';
import Review from '../components/review.vue';
import Raiting from '../components/raiting.vue';

export default {
  components: {
    f7Page,
    f7Block,
    f7BlockTitle,
    f7Link,
    f7Tabs,
    f7Tab,
    f7Badge,
    f7Input,
    CardFull,
    CardList,
    Pagination,
    UserList,
    Review,
    Raiting,
  },
  props: {
    f7router: Object,
  },
  setup() {
    return {
      theme,
    };
  },
  data() {
    return {
      topServices: [
        {
          name: 'Стрижка небезпечною бритвою для небезпечних',
          image: '/img/service8.png',
          top: true,
          location: 'Київ, Святошинський',
          price: '370 ₴',
          service: 'Стрижка чоловіча',
        },
      ],
      services: [
        {
          name: 'Стильна стрижка бороди, зручне розташування',
          image: '/img/service6.png',
          price: '3057 ₴',
          tag: 'Тег послуг для пошук...',
        },
        {
          name: 'Воскове видалення зайвого волосся',
          image: '/img/service7.png',
          price: '799 ₴',
          tag: 'Стрижка чоловіча',
        },
        {
          name: 'Стильна стрижка бороди, зручне розташування',
          image: '/img/service6.png',
          price: '3057 ₴',
          tag: 'Тег послуг для пошук...',
        },
        {
          name: 'Воскове видалення зайвого волосся',
          image: '/img/service7.png',
          price: '799 ₴',
          tag: 'Стрижка чоловіча',
        },
        {
          name: 'Стильна стрижка бороди, зручне розташування',
          image: '/img/service6.png',
          price: '3057 ₴',
          tag: 'Тег послуг для пошук...',
        },
        {
          name: 'Воскове видалення зайвого волосся',
          image: '/img/service7.png',
          price: '799 ₴',
          tag: 'Стрижка чоловіча',
        },
        {
          name: 'Стильна стрижка бороди, зручне розташування',
          image: '/img/service6.png',
          price: '3057 ₴',
          tag: 'Тег послуг для пошук...',
        },
        {
          name: 'Воскове видалення зайвого волосся',
          image: '/img/service7.png',
          price: '799 ₴',
          tag: 'Стрижка чоловіча',
        },
        {
          name: 'Стильна стрижка бороди, зручне розташування',
          image: '/img/service6.png',
          price: '3057 ₴',
          tag: 'Тег послуг для пошук...',
        },
        {
          name: 'Воскове видалення зайвого волосся',
          image: '/img/service7.png',
          price: '799 ₴',
          tag: 'Стрижка чоловіча',
        },
      ],
      reviews: [
        {
          avatar: '/img/avatar2.png',
          name: 'Віталій Станіславович',
          profession: 'Барбер',
          raiting: '😍 5',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          createdAt: 'Сьогодні, 14:39',
        },
        {
          avatar: '/img/avatar3.png',
          name: 'Віталій Станіславович',
          profession: 'Барбер',
          raiting: '😊 4',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          createdAt: 'Сьогодні, 14:39',
        },
        {
          avatar: '/img/avatar4.png',
          name: 'Віталій Станіславович',
          profession: 'Барбер',
          raiting: '😐 3',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          createdAt: 'Сьогодні, 14:39',
        },
        {
          avatar: '/img/avatar2.png',
          name: 'Віталій Станіславович',
          profession: 'Барбер',
          raiting: '😍 5',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          createdAt: 'Сьогодні, 14:39',
        },
        {
          avatar: '/img/avatar3.png',
          name: 'Віталій Станіславович',
          profession: 'Барбер',
          raiting: '😍 5',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          createdAt: 'Сьогодні, 14:39',
        },
      ],
      commentsToShow: 4,
      totalComments: 0,
    };
  },
  mounted() {
    this.totalComments = this.reviews.length;
  },
};
</script>

<style>
@import url('../assets/css/home.css');
</style>
