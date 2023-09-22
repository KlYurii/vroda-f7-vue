<template>
  <f7-page class="page-home bg-color-white" no-navbar>
    <template v-for="(dialog, ind) in dialogs" :key="`dialog-${ind}`">
      <f7-link :href="`/dialog/${dialog.id}`" class="dialog-link">
        <dialog-list v-bind="dialog" />
      </f7-link>
    </template>
  </f7-page>
</template>
<script>
import { f7Page, f7Link } from 'framework7-vue';
import DialogList from '../components/dialog-list.vue';

export default {
  components: {
    f7Page,
    f7Link,
    DialogList,
  },
  data() {
    return {
      dialogs: [
        {
          id: 1,
          name: 'Віталій Станіславович',
          profession: 'Перукар',
          count: 32,
          avatar: '/img/avatar1.png',
        },
        {
          id: 2,
          name: 'Віталій Станіславович',
          profession: 'Перукар',
          count: 7,
          avatar: '/img/avatar2.png',
        },
        {
          id: 3,
          name: 'Віталій Станіславович',
          profession: 'Перукар',
          count: 0,
          avatar: '/img/avatar1.png',
        },
        {
          id: 4,
          name: 'Віталій Станіславович',
          profession: 'Перукар',
          count: 0,
          avatar: '/img/avatar2.png',
        },
      ],
    };
  },
};
</script>

<style scoped>
.dialog-link {
  display: flex;
}
</style>
