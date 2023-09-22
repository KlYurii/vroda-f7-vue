<template>
  <f7-page class="page-home" no-navbar>
    <f7-block-title class="searchbar-found">Сторінки</f7-block-title>
    <f7-list strong inset dividers-ios class="components-list searchbar-found">
      <f7-list-item link="/index/" title="Майстер">
        <template #media>
          <f7-icon icon="icon-f7" />
        </template>
      </f7-list-item>
      <f7-list-item link="/salon/" title="Салон">
        <template #media>
          <f7-icon icon="icon-f7" />
        </template>
      </f7-list-item>
      <f7-list-item link="/no-messages/" title="Немає повідомлень">
        <template #media>
          <f7-icon icon="icon-f7" />
        </template>
      </f7-list-item>
      <f7-list-item link="/dialogs/" title="Діалоги">
        <template #media>
          <f7-icon icon="icon-f7" />
        </template>
      </f7-list-item>
      <f7-list-item link="/dialog/1/" title="Діалог юзера">
        <template #media>
          <f7-icon icon="icon-f7" />
        </template>
      </f7-list-item>
      <f7-list-item link="/filters/" title="Фільтри">
        <template #media>
          <f7-icon icon="icon-f7" />
        </template>
      </f7-list-item>
      <f7-list-item link="/searching/" title="Пошук">
        <template #media>
          <f7-icon icon="icon-f7" />
        </template>
      </f7-list-item>
      <f7-list-item link="/500/" title="Помилка 500">
        <template #media>
          <f7-icon icon="icon-f7" />
        </template>
      </f7-list-item>
      <f7-list-item link="/skeleton-example/" title="Приклад скелетонів">
        <template #media>
          <f7-icon icon="icon-f7" />
        </template>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
import { f7Page, f7BlockTitle, f7List, f7ListItem, f7Icon, theme } from 'framework7-vue';

export default {
  components: {
    f7Page,
    f7BlockTitle,
    f7List,
    f7ListItem,
    f7Icon,
  },
  props: {
    f7router: Object,
  },
  // eslint-disable-next-line
  setup() {
    return {
      theme,
    };
  },
};
</script>
